import cv2
import numpy as np

# Load original reference
img = cv2.imread(r'C:/Users/BOSS SERVICES 47/.gemini/antigravity/brain/b75e19f3-ec46-4915-83ac-6be7027c0801/.user_uploaded/media_1792225282069_b988c56b.png')
h, w = img.shape[:2]

# Create mask for text and UI elements to remove so we have pure backdrop
mask = np.zeros((h, w), dtype=np.uint8)

# 1. Top Navbar region (y: 0 to 65)
# In the top navbar, we have:
# - Logo at (x: 40..195, y: 15..58)
# - Nav links at (x: 500..740, y: 20..50)
# - Location pill at (x: 780..960, y: 18..50)
mask[15:60, 40:200] = 255
mask[18:50, 500:745] = 255
mask[16:50, 780:965] = 255

# 2. Left side text (x: 0 to 425)
# Eyebrow (y: 95..120, x: 45..270)
mask[95:120, 45:270] = 255

# Heading lines (y: 125..295, x: 45..425)
# Let's detect bright pixels on the left area (text)
left_roi = img[120:300, 40:430]
# Text is either white or bright orange
gray_left = cv2.cvtColor(left_roi, cv2.COLOR_BGR2GRAY)
text_mask = cv2.threshold(gray_left, 50, 255, cv2.THRESH_BINARY)[1]
# Dilate slightly to cover edges
kernel = np.ones((5,5), np.uint8)
dilated = cv2.dilate(text_mask, kernel, iterations=2)
mask[120:300, 40:430] = dilated

# 3. Paragraph (y: 300..365, x: 45..350)
p_roi = img[300:365, 45:350]
gray_p = cv2.cvtColor(p_roi, cv2.COLOR_BGR2GRAY)
p_mask = cv2.threshold(gray_p, 45, 255, cv2.THRESH_BINARY)[1]
p_dilated = cv2.dilate(p_mask, kernel, iterations=2)
mask[300:365, 45:350] = p_dilated

# 4. Buttons (y: 370..435, x: 45..350)
mask[370:435, 45:235] = 255
mask[370:435, 240:350] = 255

# 5. Right Floating Card text & icon (x: 785..940, y: 130..265)
# We want the card's text and icon removed, keeping the beautiful skyline and warm sunset behind it!
card_roi = img[130:265, 785:940]
gray_card = cv2.cvtColor(card_roi, cv2.COLOR_BGR2GRAY)
card_mask = cv2.threshold(gray_card, 160, 255, cv2.THRESH_BINARY)[1]
card_dilated = cv2.dilate(card_mask, np.ones((3,3), np.uint8), iterations=2)
mask[130:265, 785:940] = card_dilated
# Also the card border if needed, but wait: our React card will sit at the exact position!
# If our React card sits at that exact position with backdrop-blur, removing the card border is also good:
# Let's see: card box is around [115:275, 780:945]
# Let's remove the card box so our React component can render the pure glassmorphism card!
card_box_mask = np.zeros((h, w), dtype=np.uint8)
card_box_mask[115:275, 780:950] = 255

# 6. Bottom Stats Bar (y: 450..545, x: 45..960)
# When our React stats bar renders, it covers y: 450..545.
# Let's inpaint the bottom stats bar text, icons, and box
stats_box_mask = np.zeros((h, w), dtype=np.uint8)
stats_box_mask[445:550, 45:965] = 255

# Combine mask
full_mask = mask | card_box_mask | stats_box_mask

# Perform inpainting
inpainted = cv2.inpaint(img, full_mask, inpaintRadius=7, flags=cv2.INPAINT_TELEA)

# Let's also do a second pass for any leftover artifacts
cv2.imwrite('scratch/clean_hero_test.png', inpainted)
print('Inpainted test image saved to scratch/clean_hero_test.png')
