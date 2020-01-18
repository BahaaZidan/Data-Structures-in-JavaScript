const insertionSort = array => {
  for(let i = 1; i < array.length; i++) {
    let current = array[i];
    for(let j = i - 1; j >= 0; j--) {
      if (current < array[j]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

// const insertionSort = array => {
//   for(let i = 1; i < array.length; i++) {
//     let current = array[i];
//     let j = i;
//     while(array[j - 1] > current && j > 0) {
//       array[j] = array[j- 1];
//       j--;
//     }
//     array[j] = current;
//   }
// }

export default insertionSort;
