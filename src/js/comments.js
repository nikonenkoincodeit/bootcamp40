import data from "../data/comments.json";
import { convertMs } from "../helpers/convertMs";
import { commentsList } from "./refs";

console.log("comments :>> ", data);

(function () {
  const markup = createMarkup(data);
  addMarkup(commentsList, markup);
})();

// {
//     "author": "John Doe",
//     "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolorem?",
//     "createdAt": "2022-03-22T12:43:43.020Z"
//   },

function addMarkup(elem, markup = "") {
  elem.innerHTML = markup;
}

function createMarkup(data = []) {
  return data
    .map(({ author, content, createdAt }) => {
      const time = new Date(createdAt).getTime();
      const { days } = convertMs(time);
      return `      <div class="card">
    <div class="card-body">
      <span class="text-muted">Author</span>
      <h5 class="card-title">${author}</h5>
      <p class="card-text">
        ${content}
      </p>
    </div>
    <div class="card-footer text-muted">posted at ${days} days</div>
  </div>`;
    })
    .join("");
}
