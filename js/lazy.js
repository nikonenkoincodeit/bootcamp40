import { images } from './data/images.js';

//

//<img src="my-image.jpg" loading="lazy" alt="Image description" />

//lazy - браузер виконає відкладене завантаження зображення.
//eager - зображення буде завантажене за першої нагоди, тобто без відкладеного завантаження.
//auto - браузер сам визначає - виконувати відкладене завантаження чи ні.
//Значення за замовчуванням.
// loading="lazy"
//data-src
//lazyload
//src="../images/lqip-image.jpeg"

const imageGallery = document.querySelector('.js-image-gallery');

function init() {
  const markup = createListImages(images);
  addMarkup(imageGallery, markup);
}

function createListImages(data = []) {
  return data
    .map((img, index) => {
      return `<div class="card bg-light text-warning">
      <img class="img-fluid img-thumbnail card-img ls-is-cached lazyload" src="../images/lqip-image.jpeg" data-src="../images/${img}"
         alt="cat" width="900" height="800">
      <div class="card-img-overlay">
        <h5 class="card-title">Image - ${index + 1}</h5>
      </div>
    </div>`;
    })
    .join('');
}

function addMarkup(elem, markup = '') {
  elem.innerHTML = markup;
}

init();
