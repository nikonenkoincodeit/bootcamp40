import { rowRef, btnRef } from "./refs";
import { addMarkup } from "./util";
import { getData } from "./api";
import { markupListCards } from "./markup";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

const data = {
  limit: 40,
  _skip: 0,
  maxProducts: 0,
  get skip() {
    return this._skip;
  },
  set skip(value) {
    this._skip = value;
    if (this._skip >= this.maxProducts) {
      btnRef.classList.add("is-hidden");
      alert("finis");
    } else {
      btnRef.classList.remove("is-hidden");
    }
  },
};

function getProducts(limit = 20, s = 0) {
  btnRef.classList.add("is-hidden");
  getData(`products?limit=${limit}&skip=${s}`)
    .then(({ products, total }) => {
      data.maxProducts = total;
      data.skip += data.limit;
      const markup = markupListCards(products);
      addMarkup(rowRef, markup);
    })
    .catch((error) => {
      alert(error.messages);
    });
}

getProducts(data.limit, data.skip);

function onClickBtn() {
  getProducts(data.limit, data.skip);
}

btnRef.addEventListener("click", onClickBtn);
