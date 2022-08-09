export const createUsersTable = (data = []) => {
  return data
    .map(({ name, username, email, website, id }, index) => {
      return ` <tr data-userId="${id}">
    <th scope="row">${index + 1}</th>
    <td>${name}</td>
    <td>${username}</td>
    <td>${email}</td>
    <td>${website}</td>
  </tr>`;
    })
    .join("");
};


export const createUsersInfo = (data = []) => {
  return data
    .map(({ name, username, email, address, phone, website, company, id }, index) => {
      return ` <tr data-userId="${id}">
    <th scope="row">${index + 1}</th>
    <td>${name}</td>
    <td>${username}</td>
    <td>${email}</td>
    <td>${address.city}</td>
    <td>${phone}</td>
    <td>${website}</td>
    <td>${company.name}</td>
  </tr>`;
    })
    .join("");
};


export const createUsersAlbum = (data = []) => {
  return data
    .map(({ title, id }, index) => {
      return /* html */`<li class="list-group-item d-flex justify-content-between align-items-start js-list-user-album" data-id="${id}">
    <div class="ms-2 me-auto">
      <div class="fw-bold">${title}</div>
    </div>
    <span class="badge bg-primary rounded-pill">rat</span>
  </li>`;
    })
    .join("");
};


export const createListSong = (data = []) => {
  return data
    .map(({ title, thumbnailUrl, id }, index) => {
      return /* html */ `<div class="card" data-set="${id}">
          <img
            class="bd-placeholder-img card-img-top"
            width=200
            height=200
            src="${thumbnailUrl}"
            alt= "${title}">
          <div class="card-body">
            <p class="card-text">
              ${title}
            </p>
          </div>
        </div>`;
    })
    .join("");
};