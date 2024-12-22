function solution(k, m, score) {
    let answer = 0;

    // 점수 내림차순 정렬
    score.sort((a, b) => b - a);

    // 상자를 만들고 계산
    for (let i = 0; i < Math.floor(score.length / m); i++) {
        const boxStartIndex = i * m; 
        const minScore = score[boxStartIndex + m - 1];
        answer += minScore * m; 
    }

    return answer;
}
