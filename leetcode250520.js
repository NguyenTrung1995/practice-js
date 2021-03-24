const A = [1,1,2,1,2];
const B = [1,3,2,3,1];

var maxUncrossedLines = function(A, B) {
    const list = [];
    let jTemp = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = jTemp; j < B.length; j++) {
            if (A[i] === B[j]) {
                if (!list.length) {
                    list.push({ i, j });
                } else {
                    const itemEnd = list[list.length - 1];
                    const iEnd = itemEnd.i;
                    const jEnd = itemEnd.j;
                    if (i > iEnd && j > jEnd) {
                        list.push({ i, j });
                    }
                }
            }
        }
        jTemp = list[list.length - 1] ? list[list.length - 1].j : 0;
    }
    return list.length;
};

console.log(maxUncrossedLines(A, B))