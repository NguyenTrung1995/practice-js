const test = str => {
    const a = ['(', '[', '{'];
    const b = [')', ']', '}'];
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        if (a.includes(str[i])) {
            stack.push(str[i]);
        }
        if (b.includes(str[i])) {
            const lastItem = stack.pop();
            if (b.indexOf(str[i]) !== a.indexOf(lastItem)) return false;
        }
    }
    return !stack.length;
};

console.log(test('function() { cosnt a = [] } {'))