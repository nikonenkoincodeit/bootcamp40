import { images } from './data/images.js';

const imageGallery = document.querySelector('.js-image-gallery');

//

//<img src="my-image.jpg" loading="lazy" alt="Image description" />

//lazy - браузер виконає відкладене завантаження зображення.
//eager - зображення буде завантажене за першої нагоди, тобто без відкладеного завантаження.
//auto - браузер сам визначає - виконувати відкладене завантаження чи ні.
//Значення за замовчуванням.
// loading="lazy"

function createMarkup(array = []) {
  return array.map(img => {
    return `  <div class="card bg-light text-warning">
    <img
      class="img-fluid img-thumbnail card-img lazyload"
      src="../images/lqip-image.jpeg"
      data-src="../images/${img}"
      alt="cat"
      width="900"
      height="800"
    />
    <div class="card-img-overlay">
      <h5 class="card-title">Image - 1</h5>
    </div>
  </div>`;
  });
}

function addMarkup(markup = '') {
  imageGallery.innerHTML = markup;
}

function start() {
  const markup = createMarkup(images);
  addMarkup(markup);
}

start();
