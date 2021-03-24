// Complete the happyLadybugs function below.
function happyLadybugs(b) {
    if (b.length === 1 && b[0] !== '_') return 'NO';
    let happyBugs = true;

    for (let i = 0; i < b.length - 1; i++) {
        if ((b[i] !== b[i + 1]) && (b[i + 1] !== b[i + 2])) happyBugs = false;
    }

    if (happyBugs) return 'YES';

    const map = {};
    for (let i = 0; i < b.length; i++) {
        if (map[b[i]]) {
            map[b[i]] += 1;
        } else {
            map[b[i]] = 1;
        }
    }

    for (const key in map) {
        if (key !== '_' && map[key] < 2) return 'NO'; 
    }

    if (!map['_'] || map['_'] < 1) return 'NO';

    return 'YES';
}

console.log(happyLadybugs('MKNNNNMMMK'))
