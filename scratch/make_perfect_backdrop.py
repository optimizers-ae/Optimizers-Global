import cv2
import numpy as np
from PIL import Image

ref = Image.open(r'C:/Users/BOSS SERVICES 47/.gemini/antigravity/brain/b75e19f3-ec46-4915-83ac-6be7027c0801/.user_uploaded/media_1792225282069_b988c56b.png').convert('RGB')
high_res = ref.resize((1672, 941), Image.Resampling.LANCZOS)
img = np.array(high_res)[:, :, ::-1].copy()
h, w = img.shape[:2]

mask = np.zeros((h, w), dtype=np.uint8)

# 1. Top navbar: completely black out or inpaint top 85px from x:0 to 1672
# In ref, top 80px has logo (left), links (middle), pill (right)
mask[10:95, 40:340] = 255
mask[10:85, 780:1240] = 255
mask[10:85, 1240:1620] = 255

# 2. Left side:
# The man's sunglasses edge starts at x = 710 in 1672-width image!
# Let's verify where the man starts:
# Head is around x=710 to 1150.
# So everything to the left of x = 680 is background!
# Let's cleanly fill x: 0 to 600 with the exact dark background gradient, and blend between 600 and 700!
# Wait! Let's check what x < 680 looks like in ref:
# It is black/dark burgundy with one or two faint circular lines.
# But in ref, the text "WELCOME TO THE NEW STANDARD." spans from x=80 to x=680!
# Specifically:
# "WELCOME TO" goes up to x=675!
# "THE NEW" goes up to x=555!
# "STANDARD." goes up to x=660!
# "While you focus on..." goes up to x=530!
# Buttons go up to x=550!
# Let's mask all text pixels in [140:740, 60:700]:
left_crop = img[140:740, 60:700]
gray_left = cv2.cvtColor(left_crop, cv2.COLOR_BGR2GRAY)
# Text is anything brighter than the dark background (background is < 40 in gray)
text_detect = cv2.threshold(gray_left, 35, 255, cv2.THRESH_BINARY)[1]
# Dilate
text_mask = cv2.dilate(text_detect, np.ones((7,7), np.uint8), iterations=3)
mask[140:740, 60:700] = np.maximum(mask[140:740, 60:700], text_mask)

# 3. Floating card on right (x: 1280 to 1570, y: 190 to 450)
card_crop = img[190:450, 1280:1570]
gray_card = cv2.cvtColor(card_crop, cv2.COLOR_BGR2GRAY)
# In the card, background is around 60-120, text is bright white/orange > 150
card_text = cv2.threshold(gray_card, 140, 255, cv2.THRESH_BINARY)[1]
card_text_dilated = cv2.dilate(card_text, np.ones((5,5), np.uint8), iterations=3)
mask[190:450, 1280:1570] = np.maximum(mask[190:450, 1280:1570], card_text_dilated)

# 4. Bottom stats bar (y: 720 to 900, x: 60 to 1600)
stats_crop = img[720:900, 60:1600]
gray_stats = cv2.cvtColor(stats_crop, cv2.COLOR_BGR2GRAY)
stats_text = cv2.threshold(gray_stats, 60, 255, cv2.THRESH_BINARY)[1]
stats_text_dilated = cv2.dilate(stats_text, np.ones((7,7), np.uint8), iterations=3)
mask[720:900, 60:1600] = np.maximum(mask[720:900, 60:1600], stats_text_dilated)

print('Inpainting with Telea...')
res = cv2.inpaint(img, mask, inpaintRadius=9, flags=cv2.INPAINT_TELEA)

# For the left side (x: 0 to 520), let's ensure it's deep cinematic black/burgundy:
for x in range(540):
    weight = 1.0 if x < 350 else (540 - x) / 190.0
    for y in range(h):
        # Target color: deep studio dark #080609 at top, transitioning slightly
        r = 8.0 + (y / h) * 10.0
        g = 6.0 + (y / h) * 3.0
        b = 9.0 + (y / h) * 2.0
        target = np.array([b, g, r], dtype=np.float32)
        res[y, x] = (res[y, x].astype(np.float32) * (1.0 - weight) + target * weight).astype(np.uint8)

cv2.imwrite('src/assets/hero-backdrop.png', res)
print('Saved updated src/assets/hero-backdrop.png')
