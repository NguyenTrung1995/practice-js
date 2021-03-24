function flatlandSpaceStations(n, c) {
    const result = [];
    if (n === c.length) return 0;
    for (let i = 0; i < n; i++) {
        let min = Math.min();
        for (let j = 0; j < c.length; j++) {
            if (c[j] === i) {
                min = 0;
                break;
            }
            if (min > Math.abs(i - c[j])) min = Math.abs(i - c[j]);
        }
        result.push(min);
    }
    return Math.max(...result);
}

console.log(flatlandSpaceStations(5, [0, 4]));
