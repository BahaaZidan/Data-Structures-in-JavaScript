class TrieNode {
  constructor(value) {
    this.values = new Set(value && [value]);
    this.endOfWord = false;
    this.next;
  }
}

export class Trie {
  constructor() {
    this.root = null;
  }
}