import { getData } from "../api";
import { markupUserListAlbums, markupUserTable } from "../markup";
import { addMarkup } from "../util";
import { userTableRef, albumRef } from "../refs";

const params = location.search;
const userId = params.split("=")[1] || 1;

(function () {
  getData(`users/${userId}`)
    .then((data) => {
      const markup = markupUserTable([data]);
      addMarkup(userTableRef, markup);
    })
    .catch((error) => {
      alert(error.messages);
    });

  getData(`albums?userId=${userId}`)
    .then((data) => {
      const markup = markupUserListAlbums(data);
      addMarkup(albumRef, markup);
    })
    .catch((error) => {
      alert(error.messages);
    });
})();

function onClickAlbum(e) {
  const t = e.target.closest(".js-list-user-album");
  if (!t) return;
  location.href = "album.html?albumId=" + t.dataset.id;
}

albumRef.addEventListener("click", onClickAlbum);
