function solution(X, Y) {
    const countX = {};
    const countY = {};
    let result = [];

    // X 숫자 빈도수 카운트
    for (let digit of X) {
        countX[digit] = (countX[digit] || 0) + 1;
    }

    // Y 숫자 빈도수 카운트
    for (let digit of Y) {
        countY[digit] = (countY[digit] || 0) + 1;
    }

    // 0~9 숫자 기준으로 공통 최소 개수만큼 추가
    for (let i = 0; i <= 9; i++) {
        const digit = i.toString();
        if (countX[digit] && countY[digit]) {
            const repeatCount = Math.min(countX[digit], countY[digit]);
            result.push(digit.repeat(repeatCount));
        }
    }

    // 결과 처리
    const answer = result.sort((a, b) => b.localeCompare(a)).join('');

    if (answer === '') return "-1";       // 공통 숫자 없음
    if (/^0+$/.test(answer)) return "0";  // 모두 0이면 하나의 "0"
    return answer;
}
