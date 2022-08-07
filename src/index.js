import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

import data from "./data.json";

const listRef = document.querySelector(".list");

const markup = data
  .map(({ img }) => {
    return `<li><div class="card">
  <img src="${require("./images/" + img)}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></li>`;
  })
  .join("");

listRef.insertAdjacentHTML("beforeend", markup);
