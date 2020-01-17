class HashTable {
  constructor() {
    this.values = [];
  }

  #hash(value) {
    return value % 20;
  }

  insert(value) {
    let hash = this.#hash(value);
    this.values[hash] ? this.values[hash].push(value) : this.values[hash] = [value];
  }

  search(value) {
    let hash = this.#hash(value);
    return this.values[hash]?.find(x => x === value);
  }

  delete(value) {
    let hash = this.#hash(value);
    if (this.values[hash]) {
      let idx = this.values[hash].indexOf(value);
      idx !== -1 ? this.values[hash].splice(idx, 1) : null;
    }
  }

}

export default HashTable;