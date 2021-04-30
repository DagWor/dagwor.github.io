class SingleLinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    add(x) {
        let node = new Node(x);
        let current;

        if (this.head == null) this.head = node;
        else {
            current = this.head;

            while (current.next) current = current.next;
            current.next = node;
        }
        this.size++;
    }

    remove(x) {
        let current = this.head;
        let prev = null;

        while (current != null) {
            if (current.element === x) {
                if (prev == null) this.head = current.next;
                else prev.next = current.next;

                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    print() {
        let current = this.head;
        let string = "{";
        while (current.next) {
            string += current.element + ", ";
            current = current.next;
        }
        console.log(string + current.element + "}");
    }
}


class Node {
    constructor(x) {
        this.element = x
        this.next = null
    }
}


console.log();
console.log("Lab 9, Question 2")
let c = new SingleLinkedList()
c.add(1);
c.add(2);
c.add(3);
c.print();
c.remove(2);
c.print();