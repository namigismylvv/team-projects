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

  // SLAYDLARIN DATASI – özün istədiyin qədər əlavə et
  

  // DOM elementlərini götürürük
   const sliderTrack = document.querySelector(".hero__slider");
  const slides = document.querySelectorAll(".hero__slide");
  const dots = document.querySelectorAll(".sliderbtns .dot");

  let currentIndex = 0;
  const totalSlides = slides.length;
  const intervalTime = 4000; // 4 saniyədə bir dəyişsin

  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    currentIndex = index;

    // Scroll effekti: track-i sola sürüşdürürük
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Pagination yenilənməsi
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  // Avtomatik interval
  setInterval(() => {
    goToSlide(currentIndex + 1);
  }, intervalTime);

  // (istəsən dot-ları clickable da edə bilərsən)
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      goToSlide(i);
    })});