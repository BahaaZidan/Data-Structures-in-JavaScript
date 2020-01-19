import bubbleSort from './bubbleSort';

const bucketSort = array => {
  let max = array.reduce((prev, curr) => curr > prev ? curr : prev, array[0]); // n
  let numberOfBuckets = Math.floor(Math.sqrt(array.length)); // 1
  let getAppropriateBucket = value => Math.ceil((value * numberOfBuckets) / max); // 1

  let buckets = [];
  for(let i = 0; i < numberOfBuckets; i++) buckets.push([]); // < n
  array.forEach(value => { // n
    buckets[getAppropriateBucket(value) - 1].push(value);
  });

  buckets.forEach(bucket => { bubbleSort(bucket) }); // n^2 when using bubble sort. can be n*log(n) if quick sort is used

  return buckets.flat(); // n
}

export default bucketSort;
