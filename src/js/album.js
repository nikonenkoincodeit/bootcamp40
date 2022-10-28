import { getData } from "../api";

import { markupListAlbums } from "../markup";
import { addMarkup } from "../util";
import { listSongRef } from "../refs";

const params = location.search;
const albumId = params.split("=")[1] || 1;

(function () {
  getData(`photos?albumId=${albumId}`)
    .then((data) => {
      const markup = markupListAlbums(data);
      addMarkup(listSongRef, markup);
    })
    .catch((error) => {
      alert(error.messages);
    });
})();
