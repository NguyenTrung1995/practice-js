// Complete the gridSearch function below.
function gridSearch(G, P) {
    for (let i = 0; i <= G.length - P.length; i++) {
        for (let j = 0; j <= G[0].length - P[0].length; j++) {
            let h = i;
            let c = 0;
            if (G[i].substring(j, j + P[0].length) === P[0]) {
                c++;
                for (let k = 1; k < P.length; k++) {
                    h++;
                    if (G[h].substring(j, j + P[0].length) === P[k]) c++;
                    else break;
                }
                if (c === P.length) return 'YES';
            }
        }
    }
    return 'NO';
}

const a = ['123412', '561212', '123634', '781288'];
const b = ['12', '34'];

console.log(gridSearch(a, b));

// const a = 'asdas'.substring