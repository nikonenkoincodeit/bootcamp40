//todo Телефонна книга

/*
 * Створіть об'єкт phonebook з методами add, getDate, getContacts.
 * add - створює новий контакт додаванням id та createdAt та якщо потрібно - додає дефолтне значення для властивості list, та додає контакт в масив contacts.
 * getDate - повертає дату створення об'єкта.
 * getContacts - повертає масив контактів.
 */

const phonebook = {
  contacts: [],

  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },
};

phonebook.add({
  name: 'Mango',
  email: 'mango@mail.com',
  list: 'friends',
});

phonebook.add({
  name: 'Poly',
  email: 'poly@hotmail.com',
});
