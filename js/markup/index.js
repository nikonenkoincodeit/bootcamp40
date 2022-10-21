export const createMarkup = (data = []) => {
  return data
    .map(({ id, value, checked }) => {
      return ` <li class="item js-item" data-id='${id}'>
    <p class="text js-text ${checked ? "checked" : ""}">${value}</p>
    <button class="js-remove-btn remove-btn" type="button">x</button>
  </li>`;
    })
    .join("");
};
