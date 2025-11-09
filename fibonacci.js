function fibs(n) {
    const fibNums = new Array(n + 1);
    fibNums[0] = 0;
    fibNums[1] = 1;

    for (let i = 2; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums;
}

function fibsRec(n) {
    // console.log("This was printed recursively!");
    if (n === 1) {
        return {first: 1, second: 0};
    }
    const prev = fibsRec(n - 1);
    return {first: prev.first + prev.second, second: prev.first}
}

function runFibsRec(n) {
    return fibsRec(n).first;
}

console.log("The first 8 numbers of the fibonacci sequence:", fibs(8));

console.log("The 77th fibonacci number is:", runFibsRec(77));

console.log(runFibsRec(8));
console.log(runFibsRec(4));