import { images } from './data/images.js';

//html - атрибут
// loading="lazy"
//lazy - браузер виконає відкладене завантаження зображення.
//eager - зображення буде завантажене за першої нагоди, тобто без відкладеного завантаження.
//auto - браузер сам визначає - виконувати відкладене завантаження чи ні.
//Значення за замовчуванням.

//Бібліотека lazysizes
//data-src
//lazyload
//src="../images/lqip-image.jpeg"

const imageGalleryRef = document.querySelector('.js-image-gallery');
const markup = createImageList(images);
imageGalleryRef.innerHTML = markup;

function createImageList(images = []) {
  return images
    .map(img => {
      return `       <div class="card bg-light text-warning">
      <img class="img-fluid img-thumbnail card-img ls-is-cached lazyload" data-src="../images/${img}" src='../images/lqip-image.jpeg'  alt="cat" width="900"
        height="800">
      <div class="card-img-overlay">
        <h5 class="card-title">Image - 1</h5>
      </div>
    </div>`;
    })
    .join('');
}
