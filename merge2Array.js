const a = [1, 3, 5, 6, 8, 10];
const b = [2, 3, 4, 5, 6, 7, 8, 100];

const result = [];

let i = 0, j = 0;

while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
        result.push(a[i]);
        i++;
    } else {
        result.push(b[j]);
        j++;
    }
}

if (i < a.length) {
    for (let k = i; k < a.length; k++) {
        result.push(a[k]);
    }
}

if (j < b.length) {
    for (let k = j; k < b.length; k++) {
        result.push(b[k]);
    }
}

console.log(i, j, result);
