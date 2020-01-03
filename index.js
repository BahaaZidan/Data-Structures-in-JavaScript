import { Node, BinaryTree } from './8-Trees/BinaryTree';
import { BinarySearchTree } from './8-Trees/BinarySearchTree';

const myNode = new Node(8);
const myNode1 = new Node(3);
const myNode2 = new Node(1);
const myNode3 = new Node(6);
const myNode4 = new Node(4);
const myNode5 = new Node(7);
const myNode6 = new Node(10);
const myNode7 = new Node(14);
const myNode8 = new Node(13);

const myBT = new BinarySearchTree(myNode);
// const myBT = new BinaryTree(myNode);

myBT.insert(myNode1);
myBT.insert(myNode2);
myBT.insert(myNode3);
myBT.insert(myNode4);
myBT.insert(myNode5);
myBT.insert(myNode6);
myBT.insert(myNode7);
myBT.insert(myNode8);

myBT.delete(14);

// myBT.preorderTraversal(n => { console.log(n.value) });
// console.log('---');
// myBT.inorderTraversal(n => { console.log(n.value) });
// console.log('---');
// myBT.postorderTraversal(n => { console.log(n.value) });
// console.log('---');
myBT.levelorderTraversal(n => { console.log(n.value) });

// console.log(myBT.search(150));