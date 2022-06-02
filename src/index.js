import Storage from './js/service/storage';

const STORAGE_KEY = 'savedFilters';
const form = document.querySelector('.js-form-select');

getDataFromLS();

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  formData.forEach((key, value) => console.log(`${value}: ${key}`));

  form.reset();
  Storage.remove(STORAGE_KEY);
});

form.addEventListener('change', e => {
  const { name, value } = e.target;

  let saveData = Storage.load(STORAGE_KEY) ?? {};
  saveData[name] = value;

  if (saveData) {
    Storage.save(STORAGE_KEY, saveData);
  }
});

form.addEventListener('reset', () => {
  Storage.remove(STORAGE_KEY);
});

function getDataFromLS() {
  let saveData = Storage.load(STORAGE_KEY);
  if (saveData) {
    saveData = JSON.parse(saveData);

    Object.entries(saveData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
