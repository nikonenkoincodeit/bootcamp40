export const markupUsersList = (data = []) => {
  console.log("data :>> ", data);
  return data
    .map(({ name, username, email, website, id }, index) => {
      return `  <tr data-userid='${id}'>
    <th scope="row">${index + 1}</th>
    <td>${name}</td>
    <td>${username}</td>
    <td>${email}</td>
    <td>${website}</td>
  </tr>`;
    })
    .join("");
};

export const markupUserTable = (data = []) => {
  return data
    .map(
      (
        { name, username, email, website, id, phone, company, address },
        index
      ) => {
        return `
      <tr data-userid='${id}'>
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

export const markupUserListAlbums = (data = []) => {
  return data
    .map(({ title, id }, index) => {
      return `<li class="list-group-item d-flex justify-content-between align-items-start js-list-user-album" data-id="${id}">
      <div class="ms-2 me-auto">
        <div class="fw-bold">${title}</div>
      </div>
      <span class="badge bg-primary rounded-pill">rat</span>
    </li>`;
    })
    .join("");
};
