import data from "../data/employees.json";
import { tableBody } from "./refs";
console.log("data :>> ", data);

(function init() {
  const markup = createMarkup(data);
  addMarkup(tableBody, markup);
})();

function addMarkup(elem, markup = "") {
  elem.innerHTML = markup;
}

function createMarkup(data = []) {
  return data
    .map(({ username, birthDay }, index) => {
      const d1 = new Date();
      const d2 = new Date(birthDay);
      const age = d1.getFullYear() - d2.getFullYear();
      const day1 = d1.getDate();
      const day2 = d2.getDate();

      const m = d1.getMonth();
      const m2 = d2.getMonth();
      const result = (day1, m).toString() === (day2, m2).toString();
      console.log("result :>> ", result);
      return `    <tr>
    <th scope="row">${index + 1}</th>
    <td>${username}</td>
    <td>${age}</td>
    <td>${result ? "Yes" : "No"}</td>
  </tr>`;
    })
    .join("");
}
