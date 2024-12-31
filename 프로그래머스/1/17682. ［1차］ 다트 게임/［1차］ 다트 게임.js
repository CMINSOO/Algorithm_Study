function solution(dartResult) {
    let answer = [];
    let flatted = dartResult.match(/\d+|[SDT]|[*#]/g);

    for (let i = 0; i < flatted.length; i++) {
        if (flatted[i] === 'S') {
            // Single 처리
            answer[answer.length - 1] = single(answer[answer.length - 1]);
        } else if (flatted[i] === 'D') {
            // Double 처리
            answer[answer.length - 1] = double(answer[answer.length - 1]);
        } else if (flatted[i] === 'T') {
            // Triple 처리
            answer[answer.length - 1] = triple(answer[answer.length - 1]);
        } else if (flatted[i] === '*') {
            // 스타상 처리: 마지막 2개 점수를 2배로
            if (answer.length >= 2) {
                answer[answer.length - 2] *= 2;
            }
            answer[answer.length - 1] *= 2;
        } else if (flatted[i] === '#') {
            // 아차상 처리: 마지막 점수를 음수로
            answer[answer.length - 1] *= -1;
        } else {
            // 점수 처리
            answer.push(Number(flatted[i]));
        }
    }

    // 최종 점수 합산
    return answer.reduce((acc, cur) => acc + cur, 0);
}

const single = (num) => num;
const double = (num) => Math.pow(num, 2);
const triple = (num) => Math.pow(num, 3);
