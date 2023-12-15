let currentImageIndex = 0;
const images = document.querySelectorAll('#gallery img');
const totalImages = images.length;

function showImage(index) {
  images.forEach(img => {
    img.style.opacity = 0;
  });

  images[index].style.opacity = 1;
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
  showImage(currentImageIndex);
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  showImage(currentImageIndex);
}

showImage(currentImageIndex);
