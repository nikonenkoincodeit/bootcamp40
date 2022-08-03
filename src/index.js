import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import data from "./data.json";

// import { hi, name, bye } from "./say";

// hi("Poly");
// bye("Poly");

const rowRef = document.querySelector(".row");

const images = data.map(
  ({ img }) => `  <div class="col">
<div class="card">
  <img
    src="${require(img)}"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up
      the bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>`
);

rowRef.insertAdjacentHTML("beforeend", images.join(""));
console.log("data :>> ", images);
