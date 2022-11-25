// todo Операція rest

/*
 * Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName замість firstName і lastName. */

function transformUsername({ firstName, lastName, ...args }) {
  return { ...args, fullName: firstName + ' ' + lastName };
}

console.log(
  transformUsername({
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
    hobby: 'fishing',
    id: 1,
  }),
);

console.log(
  transformUsername({
    id: 2,
    firstName: 'Adrian',
    lastName: 'Cross',
    email: 'a.cross@hotmail.com',
    friendCount: 20,
  }),
);
