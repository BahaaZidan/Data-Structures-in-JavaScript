export class Node {
	constructor(value, parent, right, left) {
		this.value = value;
		this.parent = parent;
		this.right = right;
		this.left = left;
	}
}

export class BinaryTree {
	constructor(root) {
		this.root = root;
	}

	traverse(root = this.root, type = 'preorder', cb = n => { console.log(n) }) {
		if (!root) {
			return;
		} else {
			this.traverse(root.left, type, cb);
			switch (type) {
				case 'inorder':
					cb(root);
					this.traverse(root.right, type, cb);
					break;
				case 'postorder':
					this.traverse(root.right, type, cb);
					cb(root);
					break;
				case 'preorder':
				default:
					cb(root);
					this.traverse(root.right, type, cb);
			}
		}
	}

	preorderTraversal(cb = n => { console.log(n) }) {
		this.traverse(root, 'preorder', cb);
	}

	inorderTraversal(cb = n => { console.log(n) }) {
		this.traverse(root, 'inorder', cb);
	}

	postorderTraversal(cb = n => { console.log(n) }) {
		this.traverse(root, 'postorder', cb);
	}

	levelorderTraversal(cb = n => { console.log(n) }) {
		if (!this.root) {
			return;
		} else {
			// for effeciency, this should be a linked list implementation of queue
			const tempQueue = [this.root];
			while (tempQueue.length !== 0) {
				// enqueue first level children
				if (tempQueue[0].left) tempQueue.push(tempQueue[0].left);
				if (tempQueue[0].right) tempQueue.push(tempQueue[0].right);
				cb(tempQueue[0]);
				tempQueue.shift(); // dequeue
			}
		}
	}

	insert(node) {
		if (!this.root) {
			this.root = node;
		} else {
			const tempQueue = [this.root];
			while (tempQueue.length !== 0) {
				if (!tempQueue[0].left) {
					node.parent = tempQueue[0];
					tempQueue[0].left = node;
					break;
				} else {
					tempQueue.push(tempQueue[0].left);
				}
				if (!tempQueue[0].right) {
					node.parent = tempQueue[0];
					tempQueue[0].right = node;
					break;
				} else {
					tempQueue.push(tempQueue[0].right);
				}
				tempQueue.shift();
			}
		}
	}

	delete(value) {
		if (!value) throw new Error('value required');
		if (!this.root) {
			throw new Error('tree is empty');
		} else {
			const tempQueue = [this.root];
			let found;
			let leaf, leafPath;
			const processQueueElement = (elm, dir) => {
				const elmNode = elm[dir];
				if (elmNode) {
					if (elmNode.value === value) found = elmNode;
					if (!elmNode.left && !elmNode.right) leaf = elmNode, leafPath = dir;
					tempQueue.push(elmNode);
				}
			}

			if (this.root.value === value) found = this.root;
			while (tempQueue.length !== 0) {
				processQueueElement(tempQueue[0], 'left');
				processQueueElement(tempQueue[0], 'right');
				tempQueue.shift();
			}

			if (found) {
				found.value = leaf.value;
				leaf.parent[leafPath] = null;
			} else {
				throw new Error('node not found');
			}
		}
	}

	// reduce(reducer) { // because i can
	// 	let prev;
	// 	this.preorderTraversal(n => {
			
	// 	})
	// }
}