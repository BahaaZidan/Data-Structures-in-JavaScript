import { BinaryTree } from './BinaryTree';

export class BinaryHeap_Array {
  constructor() {
    this.heap = [null];
  }

  peek() {
    return this.heap[1];
  }

  size() {
    return this.heap.length - 1; // to account for heap[0] which is not used
  }

  // inner method that corrects the array to maintain the heap property
  #heapifyBottomToTop() {
    let idx = this.heap.length - 1;
    let getParentIdx = i => i % 2 === 0 ? i / 2 : (i - 1) / 2;
    // if child is less than parent
    while(this.heap[idx] < this.heap[getParentIdx(idx)]) {
      // perform the swap
      let temp = this.heap[getParentIdx(idx)];
      this.heap[getParentIdx(idx)] = this.heap[idx];
      this.heap[idx] = temp;

      idx = getParentIdx(idx);
    }
  }

  // inner method that corrects the array to maintain the heap property
  #heapifyTopToBottom() {
    let idx = 1;
    let getLeftChildIdx = i => i*2;
    let getRightChildIdx = i => i*2 + 1;

    // if parent is more than child
    while(this.heap[idx] > this.heap[getLeftChildIdx(idx)] || this.heap > this.heap[getRightChildIdx(idx)]) {
      let smallestChildIdx = getLeftChildIdx(idx);
      if (this.heap[getLeftChildIdx(idx)] && this.heap[getRightChildIdx(idx)]) {
        smallestChildIdx = this.heap[getLeftChildIdx(idx)] > this.heap[idx] ? getRightChildIdx(idx) : getLeftChildIdx(idx);
      } else {
        smallestChildIdx = (this.heap[getLeftChildIdx(idx)] && getLeftChildIdx(idx)) || (this.heap[getRightChildIdx(idx)] && getRightChildIdx(idx));
      }

      // perform the swap
      let temp = this.heap[smallestChildIdx];
      this.heap[smallestChildIdx] = this.heap[idx];
      this.heap[idx] = temp;

      idx = smallestChildIdx;
    }
  }

  insert(value) {
    this.heap.push(value);
    this.#heapifyBottomToTop();
  }

  extractMin() {
    let minVal = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.#heapifyTopToBottom();
    return minVal;
  }

  levelorderTraversal(cb = n => { console.log(n) }) {
    this.heap.slice(1).forEach(cb);
  }

}