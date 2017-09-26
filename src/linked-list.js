const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    append(data) {
        var node = new Node(this.data),
            curentNode = this.head;
            if (!curentNode) {
                this.tail = node;
                this.length++;
                return(node);
            }
            else {
                while(curentNode) {
                    curentNode = curentNode.next;
                }
                curentNode.next = node;
                this.length++;
                return(node);
            }
    }

    head() {
        return this.head.data
    }

    tail() {
        return this.tail.data;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}
console.log(LinkedList.head);
module.exports = LinkedList;
