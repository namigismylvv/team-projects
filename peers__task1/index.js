// ===== HERO SLIDER INITIALIZATION =====
class HeroSlider {
  constructor() {
    // DOM Elements
    this.sliderTrack = document.querySelector(".hero__slider");
    this.slides = document.querySelectorAll(".hero__slide");
    this.dotsContainer = document.querySelector(".sliderbtns");

    // State
    this.currentIndex = 0;
    this.totalSlides = this.slides.length;
    this.intervalTime = 5000; // 5 seconds
    this.autoplayInterval = null;

    // Initialize
    this.init();
  }

  init() {
    if (!this.sliderTrack || !this.dotsContainer) return;

    // Generate dots based on slide count
    this.generateDots();

    // Set up event listeners
    this.setupDotClickListeners();

    // Start automatic slider
    this.startAutoplay();
  }

  generateDots() {
    // Clear existing dots
    this.dotsContainer.innerHTML = "";

    // Create dots dynamically matching slide count
    for (let i = 0; i < this.totalSlides; i++) {
      const dot = document.createElement("div");
      dot.classList.add("slider-dot");
      if (i === 0) dot.classList.add("active");
      dot.setAttribute("data-slide", i);
      this.dotsContainer.appendChild(dot);
    }
  }

  setupDotClickListeners() {
    const dots = this.dotsContainer.querySelectorAll(".slider-dot");
    dots.forEach((dot) => {
      dot.addEventListener("click", (e) => {
        const slideIndex = parseInt(e.target.getAttribute("data-slide"));
        this.goToSlide(slideIndex);
        this.restartAutoplay();
      });
    });
  }

  goToSlide(index) {
    this.currentIndex = index;

    // Update slider position
    this.sliderTrack.style.transform = `translateX(-${this.currentIndex * 100}%)`;

    // Update dot states
    const dots = this.dotsContainer.querySelectorAll(".slider-dot");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === this.currentIndex);
    });
  }

  nextSlide() {
    const nextIndex = (this.currentIndex + 1) % this.totalSlides;
    this.goToSlide(nextIndex);
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, this.intervalTime);
  }

  restartAutoplay() {
    clearInterval(this.autoplayInterval);
    this.startAutoplay();
  }
}

// Initialize slider when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new HeroSlider();
});

// ===== SCROLL SECTIONS (Products) =====
const arrows = document.querySelectorAll(".arrow");

arrows.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetID = btn.getAttribute("data-target");
    const container = document.getElementById(targetID);

    const scrollAmount = 440;

    if (btn.classList.contains("left")) {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  });
});