const fibLoop = n => {
    if (n < 2) return n;
    let x = 0, y = 1, z;
    for (let i = 2; i <= n; i++) {
        z = y + x;
        x = y;
        y = z;
    }
    return z;
};
