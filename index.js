// var checkInclusion = function (s1, s2) {
//     const myMap = new Map();
//     const sortS1 = s1.split('').sort().join('');
//     for (let i = 0; i <  s2.length && s2.substring(i, i + s1.length).length === s1.length; i++) {
//       const subStr = s2.substring(i, i + s1.length).split('').sort().join('');
//       if (!myMap.get(subStr)) {
//           myMap.set(subStr, '1');
//       }
//     }
//     return !!myMap.get(sortS1);
// };

var findAnagrams = function(s, p) {
    const myMap = new Array(26).fill(0);
    const result = [];
    const getCharCode = char => char.charCodeAt() - 97;
    for (let i = 0; i < p.length; i++) {
        myMap[getCharCode(p[i])]++;
    }
    console.log(myMap);
    let windowStart = 0;
    let windowEnd = 0;
    while (windowEnd < s.length) {
        if (myMap[getCharCode(s[windowEnd])] > 0) {
            myMap[getCharCode(s[windowEnd])]--;
            windowEnd++;
            console.log(myMap, windowEnd);
            if (windowEnd - windowStart === p.length) {
                result.push(windowStart);
            }
        } else if (windowStart === windowEnd) {
            windowStart++;
            windowEnd++;
        } else {
            myMap[getCharCode(s[windowStart++])]++;
        }
    }
    return result;
};

console.log(findAnagrams("abab", "ab"));
