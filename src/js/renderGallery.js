export function renderGallery(array, container) {
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

  container.insertAdjacentHTML('beforeend', markup);
}
