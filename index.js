// import SingleLinkedList from './4-Linked List/SingleLinkedList';

// let mySLL = new SingleLinkedList();

// mySLL.insert(55);
// mySLL.insert(44);
// mySLL.insert(22);

// mySLL.print();

import HashTable from './9-Hashing/HashTable';

let myHT = new HashTable();

myHT.insert(5);
myHT.insert(5);
myHT.insert(12);
myHT.insert(57);
myHT.insert(23);
myHT.insert(529);
myHT.insert(12);
myHT.delete(57);

console.log(myHT.search(23))

console.log(myHT.values)