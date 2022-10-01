export function createMarkup(data) {
  return data
    .map(
      ({ value, id, checked }) => `<li class="item ${
        checked ? "checked" : ""
      }" data-id="${id}">
  <p class="text">${value}</p>
  <button type="button" class="button">x</button>
</li>`
    )
    .join("");
}
