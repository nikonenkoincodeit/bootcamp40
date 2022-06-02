const STORAGE_KEY = 'savedFilters';
const form = document.querySelector('.js-form-select');

getDataFromLS();

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  formData.forEach((key, value) => console.log(`${value}: ${key}`));

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
});
form.addEventListener('change', e => {
  const { name, value } = e.target;
  // let saveData = localStorage.getItem(STORAGE_KEY);
  // saveData = saveData ? JSON.parse(saveData) : {};

  let saveData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};
  saveData[name] = value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
});

form.addEventListener('reset', () => {
  localStorage.removeItem(STORAGE_KEY);
});

function getDataFromLS() {
  let saveData = localStorage.getItem(STORAGE_KEY);
  if (!saveData) return;

  saveData = JSON.parse(saveData);

  Object.entries(saveData).forEach(([name, value]) => {
    form.elements[name].value = value;
  });
}
