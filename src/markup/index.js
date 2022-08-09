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
