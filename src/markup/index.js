export const createCard = (data = []) => {
  return data
    .map(({ thumbnail, id, title, description }) => {
      return `   <div class="col-lg-3">
      <div class="card" data-id="${id}">
        <img src="${thumbnail}" class="card-img-top" height="365"
          alt="${title}">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
        </div>
      </div>
    </div>`;
    })
    .join("");
};
