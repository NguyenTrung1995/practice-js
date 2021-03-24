class Stack {
    constructor(list) {
        this.list = list;
    }

    get length() {
        return this.list.length;
    }

    push(value) {
        this.list.push(value);
    }

    pop() {
        this.list.pop();
    }
}

const stack = new Stack([1,2,3,4,5])

stack.pop()

console.log(stack.length);