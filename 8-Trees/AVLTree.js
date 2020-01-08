import { Node } from './BinaryTree';
import { BinarySearchTree } from './BinarySearchTree';

export class AVLNode extends Node {
  constructor(value, parent, right, left, height = 0) {
    super(value, parent, right, left);
    this.height = height;
  }
}

export class AVLTree extends BinarySearchTree {
	constructor(root) {
		super(root);
	}
	
	calcHeight(node) {
		return !node ? 0 : 1 + Math.max(node?.left ? node.left.height : -1, node?.right ? node.right.height : -1);
	}

	calcBalance(node) {
		if((!node.left) && (!node.right)) { 
			return 0;
		}else if (!node.left) {
			return -1 * (node.right.height + 1);
		} else if (!node.right) {
			return node.left.height + 1;
		} else {
			return node.left.height - node.right.height;
		}
	}
  
  rotate(node, dir = 'right') {
    let opposite = dir === 'right' ? 'left' : 'right';
    let newRoot = node[opposite];
    node[opposite] = node[opposite][dir];
    newRoot[dir] = node;
		node.height = this.calcHeight(node);
		newRoot.height = this.calcHeight(newRoot);
		return newRoot;
	}

	insert(value) {
		this.root = this.avlInsert(value, this.root);
	}

	avlInsert(value, root) {
		let node = new AVLNode(value);
		// normal BST insert
		if (!root) {
			return node;
		} else if (node.value <= root.value) {
			root.left = this.avlInsert(value, root.left);
		} else {
			root.right = this.avlInsert(value, root.right);
		}

		// adjust the height of the current node
		root.height = this.calcHeight(root);

		// do rotations
		let balance = this.calcBalance(root);
		// console.log('balance', balance)
		if (balance > 1) {
			// LEFT LEFT -> right rotation
			if (this.calcBalance(root.left) > 0) {
				console.log('LEFT LEFT');
				return this.rotate(root, 'right');
			} else { // LEFT RIGHT -> right + left rotation
				console.log('LEFT RIGHT');
				root.left = this.rotate(root.left, 'left');
				return this.rotate(root, 'right');
			}
		} else if (balance < -1) {
			// RIGHT RIGHT -> left rotation
			console.log(this.calcBalance(root.right));
			if (this.calcBalance(root.right) < 0) {
				console.log('RIGHT RIGHT');
				return this.rotate(root, 'left');
			} else { // RIGHT LEFT -> left + right rotation
				console.log('RIGHT LEFT');
				root.right = this.rotate(root.right, 'right');
				return this.rotate(root, 'left');
			}
		}

		return root;
  }
  
  findMinSuccessor(root) {
		if (!root.left) {
			return root;
		}
		return this.findMinSuccessor(root.left);
	}

	delete(value, root = this.root) {
		if (!root) return;
		if (value < root.value) {
			this.delete(value, root.left);
		} else if (value > root.value) {
			this.delete(value, root.right);
		} else {
			if (root.left && root.right) {
				const minSuccesor = this.findMinSuccessor(root.right);
				root.value = minSuccesor.value;
				this.delete(minSuccesor.value, root.right);
			} else if (root.left || root.right) {
				const child = root.left || root.right;
				root.parent.left === root ? root.parent.left = child : root.parent.right = child;
			} else {
				root.parent.left === root ? root.parent.left = null : root.parent.right = null;
			}
		}
	}
}
