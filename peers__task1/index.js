const arrows = document.querySelectorAll(".arrow");

arrows.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetID = btn.getAttribute("data-target");
    const container = document.getElementById(targetID);

    const scrollAmount = 300;

    if (btn.classList.contains("left")) {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  });
});
