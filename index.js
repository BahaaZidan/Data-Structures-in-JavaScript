import { Node, BinaryTree } from './8-Trees/BinaryTree';
import { BinarySearchTree } from './8-Trees/BinarySearchTree';
import { AVLNode, AVLTree } from './8-Trees/AVLTree';

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

const myAVL = new AVLTree();

myAVL.insert(30);
myAVL.insert(20);
myAVL.insert(40);
myAVL.insert(10);
myAVL.insert(5);
myAVL.insert(3);
myAVL.insert(4);
myAVL.insert(50);
myAVL.insert(60);
myAVL.insert(70);
myAVL.insert(65);

// myAVL.levelorderTraversal(n => { console.log(n.value, n.height) })
myAVL.levelorderTraversal(n => { console.log(n.value, n.left?.value, n.right?.value) });
// console.log(myAVL.root)