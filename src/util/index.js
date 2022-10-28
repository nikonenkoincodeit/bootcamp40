export const addMarkup = (element, markup = "") => {
  element.insertAdjacentHTML("beforeend", markup);
};
