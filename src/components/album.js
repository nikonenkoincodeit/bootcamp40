import { getData } from "../service";
import { filterObjById } from "../utils";
import { listSong } from "../refs";
import { addMarkup } from "../helpers";
import { createListSong } from "../markup"

const href = location.href;
const albumId = location.search.split("=")[1];

export const getAlbum = () => {
    getData("photos").then((data) => {
        const arraySong = filterObjById(albumId, data, 'albumId');
        const markup = createListSong(arraySong);
        addMarkup(listSong, markup);
    })
        .catch((error) => {
            console.log("error :>> ", error);
        });
}



