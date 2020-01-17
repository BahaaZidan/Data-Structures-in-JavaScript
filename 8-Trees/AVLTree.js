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
	
	_calcHeight(node) {
		return !node ? 0 : 1 + Math.max(node?.left ? node.left.height : -1, node?.right ? node.right.height : -1);
	}

	_calcBalance(node) {
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
  
  _rotate(node, dir = 'right') {
    let opposite = dir === 'right' ? 'left' : 'right';
    let newRoot = node[opposite];
    node[opposite] = node[opposite][dir];
    newRoot[dir] = node;
		node.height = this._calcHeight(node);
		newRoot.height = this._calcHeight(newRoot);
		return newRoot;
	}

	insert(value) {
		this.root = this._avlInsert(value, this.root);
	}

	_avlInsert(value, root) {
		let node = new AVLNode(value);
		// normal BST insert
		if (!root) {
			return node;
		} else if (node.value <= root.value) {
			root.left = this._avlInsert(value, root.left);
		} else {
			root.right = this._avlInsert(value, root.right);
		}

		// adjust the height of the current node
		root.height = this._calcHeight(root);

		// do rotations
		let balance = this._calcBalance(root);
		if (balance > 1) {
			// LEFT LEFT -> right rotation
			if (this._calcBalance(root.left) > 0) {
				return this._rotate(root, 'right');
			} else { // LEFT RIGHT -> right + left rotation
				root.left = this._rotate(root.left, 'left');
				return this._rotate(root, 'right');
			}
		} else if (balance < -1) {
			// RIGHT RIGHT -> left rotation
			if (this._calcBalance(root.right) < 0) {
				return this._rotate(root, 'left');
			} else { // RIGHT LEFT -> left + right rotation
				root.right = this._rotate(root.right, 'right');
				return this._rotate(root, 'left');
			}
		}

		return root;
  }
  
  _findMinSuccessor(root) {
		if (!root.left) {
			return root;
		}
		return this._findMinSuccessor(root.left);
	}

	delete(value) {
		this.root = this._avlDelete(value, this.root);
	}

	_avlDelete(value, root, parent, dir) {
		if (!root) {
			// value wasn't found. do nothing
		} else if (value < root.value) {
			root.left = this._avlDelete(value, root.left, root, 'left');
		} else if (value > root.value) {
			root.right = this._avlDelete(value, root.right, root, 'right');
		} else { // value is found
			if (root.left && root.right) {
				let minSuccessor = this._findMinSuccessor(root.right);
				root.value = minSuccessor.value;
				root.right = this._avlDelete(minSuccessor.value, root.right);
			} else if (root.left || root.right) {
				parent[dir] = root.left || root.right;
			} else {
				parent[dir] = null;
			}
		}

		// adjust the height of the current node
		root.height = this._calcHeight(root);

		// do rotations
		let balance = this._calcBalance(root);
		if (balance > 1) {
			// LEFT LEFT -> right rotation
			if (this._calcBalance(root.left) > 0) {
				return this._rotate(root, 'right');
			} else { // LEFT RIGHT -> right + left rotation
				root.left = this._rotate(root.left, 'left');
				return this._rotate(root, 'right');
			}
		} else if (balance < -1) {
			// RIGHT RIGHT -> left rotation
			if (this._calcBalance(root.right) < 0) {
				return this._rotate(root, 'left');
			} else { // RIGHT LEFT -> left + right rotation
				root.right = this._rotate(root.right, 'right');
				return this._rotate(root, 'left');
			}
		}

		return root;
	}
}
