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

  getData(`albums`)
    .then((data) => {
      const markup = markupUserListAlbums(data);
      addMarkup(albumRef, markup);
    })
    .catch((error) => {
      alert(error.messages);
    });
})();
