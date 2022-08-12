export const createMarkup = ({ value, id, checked }) => {
  return `<li class="item ${checked ? "checked" : ""}" data-id="${id}">
            <p class="text">${value}</p>
            <button class="button" type="button">x</button>
          </li>`;
};
