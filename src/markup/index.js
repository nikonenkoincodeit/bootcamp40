export const createMarkup = (data = []) => {
  return data
    .map(({ id, value, checked }) => {
      return `<li class="item ${checked ? "checked" : ""}" data-id='${id}'>
      <p class="text">${value}</p>
      <button type="button" class="button">x</button>
    </li>`;
    })
    .join("");
};
