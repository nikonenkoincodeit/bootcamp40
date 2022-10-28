import { getData } from "../api";
import { markupUsersList } from "../markup";
import { addMarkup } from "../util";
import { tbodyRef } from "../refs";

(function () {
  getData("users")
    .then((data) => {
      const markup = markupUsersList(data);
      addMarkup(tbodyRef, markup);
    })
    .catch((error) => {
      alert(error.messages);
    });
})();

function onClickUser(e) {
  if (!e.target.closest("tr")) return;
  const id = e.target.closest("tr").dataset.userid;
  location.href = "user.html?userid=" + id;
}

tbodyRef.addEventListener("click", onClickUser);
