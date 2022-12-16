import data from "../data/comments.js";
import { convertMs } from "../helpers/convertMs.js";

const commentsListRef = document.querySelector(".js-comments-list");
(function () {
  const markup = createMarkup(data);
  addMarkup(markup);
})();

function addMarkup(markup = "") {
  commentsListRef.innerHTML = markup;
}

function createMarkup(data = []) {
  return data
    .map(({ author, content, createdAt }) => {
      const time = Date.now() - new Date(createdAt).getTime();
      const { days } = convertMs(time);
      return ` <div class="card">
     <div class="card-body">
       <span class="text-muted">Author</span>
       <h5 class="card-title">${author}</h5>
       <p class="card-text">
         ${content}
       </p>
     </div>
      <div class="card-footer text-muted">posted at ${days}</div>
   </div>`;
    })
    .join("");
}
