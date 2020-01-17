import { Node, BinaryTree } from './8-Trees/BinaryTree';
import { BinarySearchTree } from './8-Trees/BinarySearchTree';
import { AVLNode, AVLTree } from './8-Trees/AVLTree';
import { BinaryHeap_Array } from './8-Trees/BinaryHeap';

// const myNode = new Node(8);
// const myNode1 = new Node(3);
// const myNode2 = new Node(1);
// const myNode3 = new Node(6);
// const myNode4 = new Node(4);
// const myNode5 = new Node(7);
// const myNode6 = new Node(10);
// const myNode7 = new Node(14);
// const myNode8 = new Node(13);

// const myBT = new BinarySearchTree(myNode);
// const myBT = new BinaryTree(myNode);

// myBT.insert(myNode1);
// myBT.insert(myNode2);
// myBT.insert(myNode3);
// myBT.insert(myNode4);
// myBT.insert(myNode5);
// myBT.insert(myNode6);
// myBT.insert(myNode7);
// myBT.insert(myNode8);

// myBT.delete(14);

// myBT.preorderTraversal(n => { console.log(n.value) });
// console.log('---');
// myBT.inorderTraversal(n => { console.log(n.value) });
// console.log('---');
// myBT.postorderTraversal(n => { console.log(n.value) });
// console.log('---');
// myBT.levelorderTraversal(n => { console.log(n.value) });

// console.log(myBT.search(150));

// myAVL.insert(30);
// myAVL.insert(20);
// myAVL.insert(40);
// myAVL.insert(10);
// myAVL.insert(5);
// myAVL.insert(3);
// myAVL.insert(4);
// myAVL.insert(50);
// myAVL.insert(60);
// myAVL.insert(70);
// myAVL.insert(65);

// myAVL.delete(10);

const myHeap = new BinaryHeap_Array();

// myHeap.insert(100);
// myHeap.insert(90);
// myHeap.insert(80);
// myHeap.insert(70);
// myHeap.insert(60);
// myHeap.insert(50);
// myHeap.insert(40);
// myHeap.insert(30);
// myHeap.insert(20);

myHeap.insert(3);
myHeap.insert(5);
myHeap.insert(8);
myHeap.insert(17);
myHeap.insert(19);
myHeap.insert(36);
myHeap.insert(40);
myHeap.insert(25);
myHeap.insert(100);
// myHeap.insert(1);

myHeap.extractMin();

// myAVL.levelorderTraversal(n => { console.log(n.value, n.height) })
myHeap.levelorderTraversal();
// console.log(myAVL.root)