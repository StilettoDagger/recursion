function fibs(n) {
    const fibNums = new Array(n + 1);
    fibNums[0] = 0;
    fibNums[1] = 1;

    for (let i = 2; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums;
}

function fibsRec(n, fibsCache = [0, 1]) {
    if (fibsCache[n] !== undefined) {
        return fibsCache[n];
    }
    fibsCache[n] = fibsRec(n - 1, fibsCache) + fibsRec(n - 2, fibsCache);
    return fibsCache[n];
}

console.log(fibs(8));

console.log(fibsRec(77));