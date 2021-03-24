// Complete the stones function below.
function stones(n, a, b) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push((n - i) * a + (i - 1) * b);
    }
    result = [ ...new Set([ ... result]) ];
    result.sort((a, b) => a - b);
    return result;
}

console.log(stones(7, 9, 11));
