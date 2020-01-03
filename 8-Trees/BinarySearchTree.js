import { BinaryTree } from './BinaryTree';

export class BinarySearchTree extends BinaryTree {

	constructor(root) {
		super(root);
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

	findMinSuccessor(root) {
		if (!root.left) {
			return root;
		}
		return this.findMinSuccessor(root.left);
	}

	// search(value, root = this.root) {
	// 	if (!root) {
	// 		return;
	// 	} else if (root.value === value) {
	// 		return root;
	// 	} else {
	// 		if (value > root.value) return this.search(value, root.right);
	// 		if (value < root.value) return this.search(value, root.left);
	// 	}
	// }

	search(value) {
		let root = this.root;
		while (root) {
			if (!root) {
				return;
			} else if (root.value === value) {
				return root;
			} else {
				if (value > root.value) {
					root = root.right;
					continue;
				}
				if (value < root.value) {
					root = root.left;
					continue;
				}
			}
		}
	}
}
