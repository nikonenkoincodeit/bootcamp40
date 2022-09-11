import { images } from './data/images.js';
const imageGallery = document.querySelector('.js-image-gallery');

renderGallery(images);

function renderGallery(array) {
  const markup = array
    .map(
      (image, index) => /* html */ `
        <div class="card bg-light text-warning">
          <img
            class="img-fluid img-thumbnail card-img lazyload"
            src="../images/lqip-image.jpeg"
            data-src="../images/${image}"
            alt="cat"
            width="900"
            height="800"
          />
          <div class="card-img-overlay">
            <h5 class="card-title">Image - ${index + 1}</h5>
          </div>
        </div>`,
    )
    .join('');

  imageGallery.insertAdjacentHTML('beforeend', markup);
}

// Progress Bar
const progressBar = document.querySelector('.js-progress-bar');

const getProgressValue = () => {
  const siteHeight = document.documentElement.scrollHeight; // висота сайту
  const scrollValue = window.scrollY;
  const windowHeight = window.innerHeight;
  let progress = Math.floor((scrollValue / (siteHeight - windowHeight)) * 100);

  progressBar.style.width = progress + '%';
};

window.addEventListener('scroll', _.throttle(getProgressValue, 300));
