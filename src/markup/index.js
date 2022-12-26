export const createCard = (contacts = []) => {
  return contacts
    .map(({ createdAt, id, email, number, name }) => {
      const dateResult = Date.now() - new Date(createdAt).getTime();
      const days = Math.floor(dateResult / (1000 * 60 * 60 * 24));
      return `<div class="col-md-4 js-wrap-card" data-cardId=${id}>
      <div class="card p-3 mb-2 shadow">
        <div class="d-flex justify-content-between pb-3 border-bottom">
          <div class="d-flex flex-row align-items-center gap-1">
            <div class="ms-2 c-details">
              <h2 class="h5 mb-0 fw-bold" contenteditable="true">${name}</h2>
              <span>${days} days ago</span>
            </div>
          </div>
          <button type="button" class="btn-close" aria-label="Close"></button>
        </div>
        <div class="mt-2">
          <ul class="list-group list-group-flush">
            <li class="list-group-item d">
              <a href="tel:+" class="d-flex align-items-center text-secondary text-decoration-none nav-link">${number} </a>
            </li>
            <li class="list-group-item">
              <a href="mailto:" class="d-flex align-items-center text-secondary text-decoration-none nav-link">
                ${email}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>


`;
    })
    .join("");
};
