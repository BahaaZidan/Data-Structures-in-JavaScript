import { Node } from './BinaryTree';
import { BinarySearchTree } from './BinarySearchTree';

export class AVLNode extends Node {
  constructor(value, parent, right, left, height) {
    super(value, parent, right, left);
    this.height = height;
  }
}

export class AVLTree extends BinarySearchTree {
	constructor(root) {
		super(root);
  }
  
  ninja(node, dir = 'right') {
    let opposite = dir === 'right' ? 'left' : 'right';
    let newRoot = node[opposite];
    node[opposite] = node[opposite][dir];
    newRoot[dir] = node;
    node.height = node.height - 1;
    // newRoot.height = this.calcHeight(newRoot);
  }
  // grandchild of disbalanced node have maximum height
  rotate(node) {
    // level order traversal
    // when you detect height delta > 1
    // decide what rotation strategy will be used ll, lr, rl, rr
    // execute it
    // terminate
  }

	insert(node) {
		if (this.root === null) {
			this.root = node;
		} else {
			let root = this.root;
			while (root) {
				if (node.value > root.value) {
					if (!root.right) {
						root.right = node;
						node.parent = root;
						break;
					} else {
						root = root.right;
						continue;
					}
				} else {
					if (!root.left) {
						root.left = node;
						node.parent = root;
						break;
					} else {
						root = root.left;
						continue;
					}
				}
			}
		}
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
