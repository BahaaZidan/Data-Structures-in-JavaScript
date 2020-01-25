import { BinaryHeap_Array } from '../8-Trees/BinaryHeap';

const heapSort = array => {
  let heap = new BinaryHeap_Array();
  let sorted = [];
  array.forEach(x => heap.insert(x));
  array.forEach(() => sorted.push(heap.extractMin()));
  return sorted;
};

export default heapSort;
