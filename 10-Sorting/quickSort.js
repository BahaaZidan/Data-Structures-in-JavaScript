const quickSort = (array, start, end) => {
  if (end - start > 0) {
    let pivot = array[end];
    let j = start;
    let i = start - 1;
  
    while(j <= end) {
      if (array[j] <= pivot) {
        i++;
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      j++;
    }
    quickSort(array, start, i - 1);
    quickSort(array, i + 1, end);
  }
};

export default quickSort;