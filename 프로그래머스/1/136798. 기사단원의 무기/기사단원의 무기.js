function solution(number, limit, power) {
    let result = 0;

    // 약수의 개수를 효율적으로 계산
    function countDivisors(n) {
        let count = 0;
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                count++; // 작은 약수
                if (i !== n / i) {
                    count++; // 큰 약수 (i와 n/i가 다를 경우)
                }
            }
        }
        return count;
    }

    for (let i = 1; i <= number; i++) {
        const divisors = countDivisors(i);
        if (divisors > limit) {
            result += power;
        } else {
            result += divisors;
        }
    }

    return result;
}
