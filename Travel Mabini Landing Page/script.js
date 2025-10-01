// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll(
  ".country__card, .display__card, .banner__content, .header__content"
);

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===== Smooth Scroll Buttons =====
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  });
});

// ===== Extra Info on Hover (Destinations) =====
const countryCards = document.querySelectorAll(".country__card");

countryCards.forEach((card) => {
  const info = document.createElement("p");
  info.className = "extra-info";
  info.innerText =
    "This place is known for its stunning views and unforgettable experiences!";
  info.style.display = "none";
  info.style.padding = "0.5rem 1rem";
  info.style.fontSize = "0.85rem";
  info.style.color = "#444";

  card.appendChild(info);

  card.addEventListener("mouseenter", () => {
    info.style.display = "block";
    info.style.opacity = "0";
    setTimeout(() => {
      info.style.transition = "opacity 0.5s ease";
      info.style.opacity = "1";
    }, 50);
  });

  card.addEventListener("mouseleave", () => {
    info.style.opacity = "0";
    setTimeout(() => {
      info.style.display = "none";
    }, 300);
  });
});
