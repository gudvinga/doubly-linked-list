const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
            if (this.length == 0) {
                this._head = node;
                this._tail = node;
            }
            else {
                this._tail.next = node;
                node.prev = this._tail;
                this._tail = node;
            }
            this.length++;
            return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {
        if(this.length == 0) 
            return true;
        else
            return false;
    }

    clear() {
        var tempNode;
        while(this.length > 0) {
            tempNode = this._tail.prev;
            tempNode.next = null;
            this._tail = tempNode;
            if(this.length == 1) {
                this._head = null;
                this._tail = null; 
            }
            this.length--
            console.log(this.length);
        }
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list);
module.exports = LinkedList;
