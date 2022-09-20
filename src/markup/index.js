export const createUsersTable = (data = []) => {
  return data
    .map(({ id, name, username, email, website }, index) => {
      return `<tr data-userid='${id}'>
      <th scope="row">${index + 1}</th>
      <td>${name}</td>
      <td>${username}</td>
      <td>${email}</td>
      <td>${website}</td>
    </tr>`;
    })
    .join("");
};

export const createUserTable = (data = []) => {
  return data
    .map(
      (
        { id, name, username, email, website, address, company, phone },
        index
      ) => {
        return ` <tr data-userid='${id}'>
        <th scope="row">${index + 1}</th>
      <td>${name}</td>
      <td>${username}</td>
      <td>${email}</td>
      <td>${address.city}</td>
      <td>${phone}</td>
      <td>${website}</td>
      <td>${company.name}</td>
    </tr>`;
      }
    )
    .join("");
};

export const createUserAlbums = (data = []) => {
  return data
    .map(({ title, id }, index) => {
      return ` <li
    class="list-group-item d-flex justify-content-between align-items-start js-list-user-album"
    data-id="${id}"
  >
    <div class="ms-2 me-auto">
      <div class="fw-bold">${title}</div>
    </div>
    <span class="badge bg-primary rounded-pill">rat</span>
  </li>`;
    })
    .join("");
};
