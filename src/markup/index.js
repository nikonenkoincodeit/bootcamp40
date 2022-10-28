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
