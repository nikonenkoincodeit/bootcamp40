// Imports
import { courses } from './courses.js';

// Variables
const ACTIVE_CLASS = 'is-active';
const filtersContainer = document.querySelector('.filters-container');
const coursesContainer = document.querySelector('.courses-container');

// const filters = courses
//   .flatMap(course => course.tags)
//   .filter((item, index, array) => array.indexOf(item) === index);
const filters = [...new Set(courses.flatMap(course => course.tags))];

// Run Functions
renderFilters(filters); // рендер фільтрів
renderCourses(courses); // рендер розмітки

// Listeners
filtersContainer.addEventListener('click', onHandlerFilterClick);

// Functions
function onHandlerFilterClick(event) {
  const filter = event.target; // наша кнопка, в яку клікаємо
  const activeFilter = document.querySelector('.is-active'); // знаходимо активну кнопку
  const filterValue = filter.dataset.value; //значення дата-атрибуту

  // умова для перевірки чи клікнули в кнопку
  if (!filterValue) return;

  filter.classList.add(ACTIVE_CLASS); // вішаємо клас на кнопку в яку клікнули

  // умова для видалення класу з активної кнопки
  if (activeFilter) {
    activeFilter.classList.remove(ACTIVE_CLASS);
  }

  // умова для рендера всіх курсів
  if (filter === activeFilter) {
    return renderCourses(courses);
  }

  // знаходимо відфільтровані за тегом курси
  const filteredCourses = courses.filter(course =>
    course.tags.includes(filterValue),
  );
  // рендер відфільтрованих курсів
  renderCourses(filteredCourses);
}

function renderFilters(array) {
  const markup = array
    .map(
      course => /* html */ `
  <button class="button" type="button" data-value="${course}">${course}</button>
  `,
    )
    .join('');

  filtersContainer.insertAdjacentHTML('beforeend', markup);
}

function renderCourses(array) {
  coursesContainer.innerHTML = ''; //перед кожним рендером чистим розмітку

  const markup = array.reduce((acc, { name, prices }) => {
    acc += /* html */ `<li>${name} - ${prices} $</li>`;

    return acc;
  }, '');

  coursesContainer.insertAdjacentHTML('beforeend', markup);
}
