import quickSort from './10-Sorting/quickSort';
import heapSort from './10-Sorting/heapSort';

let unsorted = [30, 10, 50, 20, 60, 40];

// console.log(unsorted);

console.log(heapSort(unsorted, 0, unsorted.length - 1));

console.log(unsorted);