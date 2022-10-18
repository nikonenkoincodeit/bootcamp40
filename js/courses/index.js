// Imports
import { courses } from './courses.js';

const filtersRef = document.querySelector('.js-filters-container');
const coursesRef = document.querySelector('.js-courses-container');

function filterTags() {
  const tags = courses.flatMap(item => item.tags);
  return [...new Set(tags)];
  // return tags.filter((item, index, array) => {
  //   return array.indexOf(item) === index;
  // });
}

function filterCourses(courses = [], tag = '') {
  return courses.filter(({ tags }) => tags.includes(tag));
}

function createListBtns(data = []) {
  return data
    .map(
      tag => `<button class="button " type="button" data-value="${tag}">
  ${tag}
</button>`,
    )
    .join('');
}

function createListCourses(data = []) {
  return data
    .map(({ name, prices }) => {
      return `<li class="js-item">${name} - ${prices} $</li>`;
    })
    .join('');
}

function updateCourses(courses) {
  const markupCourses = createListCourses(courses);
  addMarkup(coursesRef, markupCourses);
}

function init() {
  const tags = filterTags();
  const markupBtns = createListBtns(tags);
  addMarkup(filtersRef, markupBtns);
  updateCourses(courses);
}
init();

function onFilterCourses(e) {
  const t = e.target;
  if (t.tagName !== 'BUTTON') return;
 
  const elemActive = this.querySelector('.is-active');
  if (elemActive) elemActive.classList.remove('is-active');
  t.classList.add('is-active');
  
  const value = t.dataset.value;
  const filterData = filterCourses(courses, value);
  updateCourses(filterData);
}

filtersRef.addEventListener('click', onFilterCourses);

function addMarkup(elem, markup = '') {
  elem.innerHTML = markup;
}
