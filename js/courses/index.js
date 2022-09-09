// Imports
import { courses } from './courses.js';

// const tags = courses
//   .flatMap(({ tags }) => tags)
//   .filter((item, index, array) => array.indexOf(item) === index);

const tags = [...new Set(courses.flatMap(({ tags }) => tags))];

// Variables

const coursesContainerRef = document.querySelector('.js-courses-container');
const filtersContainerRef = document.querySelector('.js-filters-container');

// Run Functions
function start() {
  const markupBtns = createFilterBtns(tags);
  const markupListCourses = createListCourses(courses);
  addMarkup(markupBtns, filtersContainerRef);
  addMarkup(markupListCourses, coursesContainerRef);
}
start();
// Listeners

filtersContainerRef.addEventListener('click', onClickBtnFilter);

// Functions

function onClickBtnFilter(e) {
  if (e.target.tagName !== 'BUTTON') return; // умова для перевірки чи клікнули в кнопку
  const { value } = e.target.dataset;
  const filterData = filterCourses(courses, value);
  const markupListCourses = createListCourses(filterData);
  addMarkup(markupListCourses, coursesContainerRef); // рендер відфільтрованих курсів
  updateClassActive(e.target);
}

function updateClassActive(elem) {
  // видалення класу з активної кнопки
  for (const child of filtersContainerRef.children) {
    if (child.classList.contains('is-active')) {
      child.classList.remove('is-active');
      break;
    }
  }
  elem.classList.add('is-active'); // вішаємо клас на кнопку в яку клікнули
}

// знаходимо відфільтровані за тегом курси
function filterCourses(courses = [], value) {
  return courses.filter(({ tags }) => tags.includes(value));
}

function createFilterBtns(tags = []) {
  return tags
    .map(
      tag =>
        `<button class="button" type="button" data-value="${tag}">${tag}</button>`,
    )
    .join('');
}

function createListCourses(courses = []) {
  return courses
    .map(({ name, prices }) => `<li>${name} - ${prices} $</li>`)
    .join('');
}

function addMarkup(markup = '', elem) {
  elem.innerHTML = markup;
}
