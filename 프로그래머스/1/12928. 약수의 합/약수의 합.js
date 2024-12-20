function solution(n) {
    let arr = new Set(); // 약수를 저장할 Set
    let answer = 0;

    // 1부터 √n까지 약수 탐색
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            arr.add(i); // 작은 약수 추가
            arr.add(n / i); // 대응되는 큰 약수 추가
        }
    }

    // Set의 값을 합산
    arr.forEach((e) => (answer += e));
    return answer;
}
