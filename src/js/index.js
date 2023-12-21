import * as basicLightbox from "basiclightbox";
import "../../node_modules/basiclightbox/src/styles/main.scss";
import { galleryItems } from "./gallery-items";
import "../css/common.css";
import "../css/gallery.css";
import { onEscClose } from "./onEscClose";

const galleryList = document.querySelector(".gallery");
galleryList.addEventListener("click", onClick);

const options = {
  handler: null,
  onShow(instance) {
    console.log(this);
    this.handler = onEscClose.bind(instance);
    document.addEventListener("keydown", this.handler);
  },

  onClose() {
    console.log(this);
    document.removeEventListener("keydown", this.handler);
  },
};

const layout = galleryItems.map(
  ({ description, original, preview }) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
);

galleryList.insertAdjacentHTML("beforeend", layout.join(""));

function onClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `
     <img src="${evt.target.dataset.source}" alt="${evt.target.alt}">`,
    options
  );

  instance.show();
}
