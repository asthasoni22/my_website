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

const gallery = document.querySelector(".career-gallery");
if (gallery) {
  const photos = Array.from(gallery.querySelectorAll(".gallery-photo"));
  const dialog = gallery.querySelector(".photo-dialog");
  const dialogImage = gallery.querySelector(".photo-dialog-image");
  const caption = gallery.querySelector("#photo-caption");
  const closeButton = gallery.querySelector(".photo-dialog-close");
  let activePhoto = 0;

  const showPhoto = (index) => {
    activePhoto = (index + photos.length) % photos.length;
    const photoButton = photos[activePhoto];
    const image = photoButton.querySelector("img");
    dialogImage.src = image.src;
    dialogImage.alt = image.alt;
    caption.textContent = photoButton.dataset.caption;
  };

  photos.forEach((photoButton, index) => {
    photoButton.addEventListener("click", () => {
      showPhoto(index);
      dialog.showModal();
    });
  });

  gallery.querySelector("[data-photo-previous]").addEventListener("click", () => {
    showPhoto(activePhoto - 1);
  });

  gallery.querySelector("[data-photo-next]").addEventListener("click", () => {
    showPhoto(activePhoto + 1);
  });

  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      showPhoto(activePhoto - 1);
    } else if (event.key === "ArrowRight") {
      showPhoto(activePhoto + 1);
    }
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}
