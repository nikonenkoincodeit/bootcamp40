// todo Майстерня коштовностей

/*
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю та розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.
 */

const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],

  calcTotalPrice(stoneName) {
    const stone = this.stones.find(({ name }) => name === stoneName);
    if (!stone) return 'Not found';
    const { price, quantity } = stone;
    return price * quantity;
  },
};

console.log(chopShop.calcTotalPrice('Emerald'));
console.log(chopShop.calcTotalPrice('Diamond'));
console.log(chopShop.calcTotalPrice('Sapphire'));
console.log(chopShop.calcTotalPrice('Ruby'));
console.log(chopShop.calcTotalPrice('Graphite'));
