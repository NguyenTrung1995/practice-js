const arr = [2, 1, -1, 3, 5, 8, 4, 5];
const maxSumK = (arr, k) => {
    if (arr.length < k) return 'Data invalid';
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }
    let windowSum = maxSum;
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum + arr[i] - arr[i - k];
        maxSum = Math.max(windowSum, maxSum);
    }
    return maxSum;
};

console.log(maxSumK(arr, 3))