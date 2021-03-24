// Sort Characters By Frequency

var frequencySort = function(s) {
    const map = new Array(128).fill(0);
    let result = '';
    for (let i = 0; i < s.length; i++) {
        map[s[i].charCodeAt(0)]++;
    }
    const handleMap = map.reduce((acc, curr, index) => {
        if (curr) return [
            ...acc,
            {
                code: index,
                value: curr
            }
        ]
        return acc;
    }, []);
    handleMap.sort((a, b) => b.value - a.value);
    handleMap.map(item => result += String.fromCharCode(item.code).repeat(item.value));
};

console.log(frequencySort('AABBBSSSDASDSDabb'));