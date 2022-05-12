// todo Колекція курсів (includes, indexOf, push тощо)

/*
 * Напишіть функції для роботи з колекцією навчальних курсів courses:

* addCourse(name) - додає курс до кінця колекції
* removeCourse(name) - видаляє курс із колекції
* updateCourse(oldName, newName) - змінює ім'я на нове
 */

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(course) {
  if (courses.includes(course)) {
    // console.log('Такий курс вже існує!');
    return;
  }

  courses.push(course);
  // console.log('Курс додано!');
}

function removeCourse(course) {
  const newArr = [];

  if (!courses.includes(course)) {
    console.log('Курс не знайдено');
    return;
  }

  for (const element of courses) {
    if (element !== course) {
      newArr.push(element);
    }
  }

  return newArr;
}

function updateCourse(oldName, newName) {
  const copyCourses = courses.slice();

  for (const course of copyCourses) {
    if (oldName === course) {
      copyCourses.splice(copyCourses.indexOf(oldName), 1, newName);
    }
  }

  return copyCourses;
}

addCourse('Express');
// ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'Такий курс вже існує'

removeCourse('React');
// ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс не знайдено'

console.log(updateCourse('Express', 'NestJS'));
// console.table(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// console.log(courses);

// Examples

// function removeCourse(course) {
// for (let i = 0; i < courses.length; i += 1) {
//   const element = courses[i];

//   if (element === course) {
//     const idx = courses.indexOf(element);

//     courses.splice(idx, 1);
//   }
// }

// if (courses.includes(course)) {
//   const idx = courses.indexOf(course);
//   courses.splice(idx, 1);
// }

// const newArr = [];

// if (!courses.includes(course)) {
//   console.log('Курс не знайдено');
//   return;
// }

// for (const element of courses) {
//   if (element !== course) {
//     newArr.push(element);
//   }
// }

// return newArr;
// }

// const arr = [];

// for (const course of courses) {
//   if (oldName !== course) {
//     arr.push(course);
//   } else {
//     arr.push(newName);
//   }
// }

// return arr;
