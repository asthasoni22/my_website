const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.querySelectorAll("a").forEach((anchor) => {
    anchor.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const photo = document.querySelector("[data-portrait]");
if (photo) {
  const custom = new Image();
  custom.onload = () => {
    photo.src = custom.src;
  };
  custom.src = "assets/astha.jpg";
}
