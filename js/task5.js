// todo Toggle

/*
 * Напишіть клас Toggle, який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчанням значення властивості on має бути false.
 */

class Toggle {
  constructor({ isOpen = false } = {}) {
    this.isOpen = isOpen;
  }
  get on() {
    return this.isOpen;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
