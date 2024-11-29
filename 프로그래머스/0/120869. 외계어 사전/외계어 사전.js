function solution(spell, dic) {
    // 각 단어에서 spell의 모든 문자가 포함된 단어를 찾기
    let isMatched = dic.some((word) => {
        // 모든 spell 요소가 word에 포함되는지 확인
        return spell.every((char) => word.includes(char));
    });

    // 조건에 따라 결과 반환
    return isMatched ? 1 : 2;
}