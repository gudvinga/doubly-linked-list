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
        if (this._head == null) return null;
        else return this._head.data;
    }

    tail() {
        if (this._tail == null) return null;
        else return this._tail.data;
    }

    at(index) {
        var tempNode = this._head;
        if(this.isEmpty() || index < 0 || index > this.length) {
            return undefined;
        }
        for( var i = 0; i < this.length; i++) {
            if (i == index) return tempNode.data;
            tempNode = tempNode.next; 
        }
    }

    insertAt(index, data) {
        var node = new Node(data);
        if(index < 0 || index > this.length) {
            return undefined;
        }
        if(index == 0) {
            node.next = this._head;
            this._head.prev = node;
            this._head = node;
            this.length++;
        }
        if(index == this.length) {
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
            this.length++;
        }
    }

    isEmpty() {
        if(this.length == 0) 
            return true;
        else
            return false;
    }

    clear() {
        var tempNode;
        while(this.length > 0) {
            if(this.length == 1) {
                this._head = null;
                this._tail = null;
            } else {
                tempNode = this._tail.prev;
                tempNode.next = null;
                this._tail = tempNode;
            }
            this.length--;
        }
    }

    deleteAt(index) {

    }

    reverse() {}

    indexOf(data) {
        var tempNode = this._head;
        if (this.isEmpty()) {
            return -1;
        }
        for(var i = 0; i < this.length; i++) {
            if(tempNode.data == data) return i;
            tempNode = tempNode.next;
        }
        return(-1);
    }
}

list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.insertAt(0,000)
list.insertAt(6,999)
console.log(list);
module.exports = LinkedList;
