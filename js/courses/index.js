// Imports
import { courses } from './courses.js';

const filtersContainerRef = document.querySelector('.js-filters-container');
const coursesContainerRef = document.querySelector('.js-courses-container');

function getCoursesTags(courses = []) {
  return courses
    .flatMap(({ tags }) => tags)
    .filter((tag, index, array) => {
      return array.indexOf(tag) === index;
    });
}

function filterData(array = [], tag) {
  return array.filter(({ tags }) => tags.includes(tag));
}

function init() {
  const tags = getCoursesTags(courses);
  const markupBtns = createMarkupBtn(tags);
  addMarkup(filtersContainerRef, markupBtns);

  const coursesMarkup = createListCourses(courses);
  addMarkup(coursesContainerRef, coursesMarkup);
}

init();

/*---------------------------*/

function createMarkupBtn(tags = []) {
  return tags
    .map(
      tag =>
        ` <button class="button" type="button" data-value="${tag}">${tag}</button> `,
    )
    .join('');
}

function createListCourses(courses = []) {
  return courses
    .map(({ name, prices }) => {
      return `<li>${name} - ${prices} $</li>`;
    })
    .join('');
}

function addMarkup(parent, markup = '') {
  parent.innerHTML = markup;
}

function onFilterCourses(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  // const elem = e.currentTarget.querySelector('.is-active');
  // if (elem) elem.classList.remove('is-active');

  for (const elem of e.currentTarget.children) {
    if (elem.classList.contains('is-active')) {
      elem.classList.remove('is-active');
      break;
    }
  }

  e.target.classList.add('is-active');
  const tag = e.target.dataset.value;
  const filterCourses = filterData(courses, tag);
  const coursesMarkup = createListCourses(filterCourses);
  addMarkup(coursesContainerRef, coursesMarkup);
}

filtersContainerRef.addEventListener('click', onFilterCourses);
