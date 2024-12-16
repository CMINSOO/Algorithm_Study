function solution(balls, share) {
    return Math.round(sFact(balls) / (sFact(balls - share) * sFact(share)));
}

function sFact(num) {
    let rval = 1;
    for (let i = 2; i <= num; i++) {
        rval *= i;
    }
    return rval;
}
