import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items";
import '../css/common.css';
import '../css/gallery.css'

const galleryList = document.querySelector(".gallery");

const layout = galleryItems.map(
  ({ description, original, preview }) => `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
);

galleryList.insertAdjacentHTML("beforeend", layout.join(""));

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});