const arr = [];
const testcase = [88888, 99999, 100000, 888888, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999];

for (let i = 0; i < 100000; i++) {
    arr.push(i);
}

console.time('time1');
const result1 = [];
for (let i = 0; i < testcase.length; i++) {
    result1.push(arr.some(numb => numb === testcase[i]));
}
// console.log(result1);
console.timeEnd('time1');

console.time('time2');
const result2 = [];
const map = {};
for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
        map[arr[i]] = 1;
    }
}
for (let i = 0; i < testcase.length; i++) {
    result2.push(!!map[testcase['' + i]]);
}
// console.log(result2);
console.timeEnd('time2');

