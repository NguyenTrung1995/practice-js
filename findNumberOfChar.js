const findNumberOfChar = str => {
    const map = {};
    for (let i = 0; i < str.length; i++) {
        if ((str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= 'a' && str[i] <= 'z')) {
            if (!map[str[i]]) {
                map[str[i]] = 1;
            } else {
                map[str[i]]++;
            }
        }
    }
    return map;
};

console.log(findNumberOfChar('adasdhasjdhasjdhaskdj@@323!@##$'));
