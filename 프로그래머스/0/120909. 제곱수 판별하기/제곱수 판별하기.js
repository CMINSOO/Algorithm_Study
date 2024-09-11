function solution(n) {
    var answer = 0;
     // 제곱근을 계산합니다.
    const sqrt = Math.sqrt(n);

    // 제곱근이 정수인지 확인합니다.
    if( Number.isInteger(sqrt)){
        return 1
    } else {
        return 2
    }

}