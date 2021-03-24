const arr = [];

const findMin = arr => {
    let min = Math.min();
    let max = Math.max();

    for (const numb of arr) {
        if (numb < min) min = numb;
        if (numb > max) max = numb;
    }

    if (min <= 0) return min * max;
    let min1 = Math.min();

    for (const numb of arr) {
        if (numb < min1 && numb !== min) min1 = numb;
    }
    
    return min * min1;
}

console.log(findMin(arr));

// for (let i = 0; i < arr.length; i++);
// for (let i = arr.length; i >= 0; i--);
