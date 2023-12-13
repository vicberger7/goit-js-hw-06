class Storage {
  #item;

  constructor(items) {
    this.#item = items;
  }

  getItems() {
    return this.#item;
  }

  addItem(newItem) {
    this.#item.push(newItem);
  }

  removeItem(itemToRemove) {
    const index = this.#item.indexOf(itemToRemove);
    if (index > -1) {
      this.#item.splice(index, 1);
    }
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems());
storage.addItem('Droid');
console.log(storage.getItems());
storage.removeItem('Prolonger');
console.log(storage.getItems());
