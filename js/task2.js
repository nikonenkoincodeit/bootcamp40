//todo Телефонна книга

/*
 * Створіть об'єкт phonebook з методами add, getDate, getContacts.
 * add - створює новий контакт додаванням id та createdAt та якщо потрібно - додає дефолтне значення для властивості list, та додає контакт в масив contacts.
 * getDate - повертає дату створення об'єкта.
 * getContacts - повертає масив контактів.
 */

const phonebook = {
  contacts: [],

  add(object) {
    const contact = {
      list: 'users',
      ...object,
      id: this.generateId(),
      date: this.getDate(),
    };
    this.contacts.push(contact);
  },

  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },

  getDate() {
    return Date.now();
  },

  getContacts() {
    return this.contacts;
  },
};

console.log(
  phonebook.add({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  }),
);

console.log(
  phonebook.add({
    name: 'Poly',
    email: 'poly@hotmail.com',
  }),
);

console.log(phonebook.getContacts());
