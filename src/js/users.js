import data from "../data/employees.js";

const tableBodyRef = document.querySelector(".js-table-body");

console.log("data :>> ", data);

(function () {
  const markup = createMarkup(data);
  addMarkup(markup);
})();

function addMarkup(markup = "") {
  tableBodyRef.innerHTML = markup;
}

function createMarkup(data = []) {
  const currentDate = new Date();
  const m = currentDate.getMonth();
  const d = currentDate.getDate();
  return data
    .map(({ username, birthDay }, index) => {
      const userDate = new Date(birthDay);
      const mU = userDate.getMonth();
      const dU = userDate.getDate();
      const year = currentDate.getFullYear() - userDate.getFullYear();
      return `<tr>
      <th scope="row">${index + 1}</th>
      <td>${username}</td>
      <td>${year}</td>
      <td>${m === mU && d === dU ? "yes" : "no"}</td>
    </tr>`;
    })
    .join("");
}
