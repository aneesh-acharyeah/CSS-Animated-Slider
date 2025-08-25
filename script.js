let slideIndex = 1;

// Initialize slider
showSlide(slideIndex);

// Next/previous controls
function moveSlide(n) {
  showSlide(slideIndex += n);
}

// Dot controls
function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  // Hide all slides
  slides.forEach(slide => {
    slide.style.opacity = "0";
    const caption = slide.querySelector('.slide-caption');
    caption.style.opacity = "0";
    caption.style.transform = "translateX(-50%) translateY(20px)";
  });

  // Show current slide
  const currentSlide = slides[slideIndex - 1];
  currentSlide.style.opacity = "1";
  const caption = currentSlide.querySelector('.slide-caption');
  caption.style.opacity = "1";
  caption.style.transform = "translateX(-50%) translateY(0)";

  // Update dots
  dots.forEach((dot, i) => {
    dot.classList.remove('active');
  });
  dots[slideIndex - 1].classList.add('active');
}

// Auto-play every 4 seconds
setInterval(() => {
  moveSlide(1);
}, 4000);

// Add active class to first dot
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.dot').classList.add('active');
});
