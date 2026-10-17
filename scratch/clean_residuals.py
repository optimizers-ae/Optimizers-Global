import cv2
import numpy as np

img = cv2.imread('src/assets/hero-backdrop.png')
h, w = img.shape[:2]

mask = np.zeros((h, w), dtype=np.uint8)

# 1. Four bottom circles in the stats bar
mask[750:860, 100:220] = 255
mask[750:860, 480:600] = 255
mask[750:860, 800:930] = 255
mask[750:860, 1200:1330] = 255

# 2. Right card dash and any residual text
mask[390:425, 1300:1380] = 255

# 3. Stats bar vertical lines
mask[760:850, 430:460] = 255
mask[760:850, 770:800] = 255
mask[760:850, 1150:1180] = 255

# Inpaint
cleaned = cv2.inpaint(img, mask, inpaintRadius=9, flags=cv2.INPAINT_TELEA)

cv2.imwrite('src/assets/hero-backdrop.png', cleaned)
print('Pristine backdrop saved!')
