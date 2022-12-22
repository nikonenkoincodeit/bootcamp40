import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

import { getData } from "./api";
import { createCard } from "./markup";
import { rowRef, btnRef } from "./refs";
import { addMarkup } from "./helpers";

// //'products?limit=10&skip=10&select=title,price

const productSettings = {
  limit: 20,
  skip: 1,
};

const toggleBtn = () => {
  btnRef.classList.toggle("is-hidden");
};

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      addCards(productSettings);
      observer.unobserve(entry.target);
    }
  });
};

const options = {
  threshold: 0.1,
  rootMargin: "0px 0px 150px 0px",
};

let observer = new IntersectionObserver(callback, options);

function addCards({ limit = 20, skip = 1 } = {}) {
  const searchParams = new URLSearchParams({ limit, skip });

  getData("products?" + searchParams)
    .then(({ products, total }) => {
      productSettings.skip += productSettings.limit;
      const markup = createCard(products);
      addMarkup(rowRef, markup);

      if (productSettings.skip < total) {
        // toggleBtn();
        const lastCard = rowRef.lastChild;

        observer.observe(lastCard);
      } else alert("Stop!");
    })
    .catch(console.log);
}
addCards(productSettings);

// const addMoreCards = () => {
//   toggleBtn();

//   addCards(productSettings);
// };

// btnRef.addEventListener("click", addMoreCards);
