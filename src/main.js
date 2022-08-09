import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

import { getUsers } from "./components/home";
import { getUser } from "./components/user";
import { getAlbum } from './components/album'

// console.log("getUsers :>> ", getUsers);
// console.log("getUser :>> ", getUser);
const arrPar = location.href.split("/");
const href = arrPar[arrPar.length - 1];

if (href.includes("index.html") || href === "") {
  getUsers();
} else if (href.includes("user.html")) {
  getUser();
} else if (href.includes("album.html")) {
  getAlbum();
} else {
  console.log("error :>> ");
}
