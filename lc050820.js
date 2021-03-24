// const arr = ['pad', 'bdf'];

const search = word => {
  let window = word.length;
  for (let i = 0; i < arr.length; i++) {
    let match = true;
    if (arr[i].length !== window) continue;
    for (let j = 0; j < window; j++) {
      if (word[j] === '.') continue;
      if (word[j] !== arr[i][j]) match = false;
    }
    if (match) return true;
  }
  return false;
}

// console.log(search('.f.'))

const arr = new Map();
arr.set('abc', 'abc');
for (const [key] of arr) {
  console.log(key);
}
console.log(arr);