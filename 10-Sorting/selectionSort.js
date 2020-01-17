const selectionSort = array => {
  for(let i = 0; i < array.length; i++) {
    let maxIdx = 0;
    for(let j = 0; j < array.length - i; j++) {
      if (array[j] > array[maxIdx]) maxIdx = j;
      // at the final iteration of the unsorted section
      if (array.length - i - j === 1) {
        // perform the swap between the maximum and the last unsorted element
        let temp = array[j];
        array[j] = array[maxIdx];
        array[maxIdx] = temp;
      }
    }
  }
}

export default selectionSort;
