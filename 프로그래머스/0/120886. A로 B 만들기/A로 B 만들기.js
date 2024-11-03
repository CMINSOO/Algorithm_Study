function solution(before, after) {
    // 문자열을 배열로 변환한 후 정렬
    const sortedBefore = before.split("").sort();
    const sortedAfter = after.split("").sort();
    
    // 정렬된 배열을 문자열로 변환하여 비교
    return JSON.stringify(sortedBefore) === JSON.stringify(sortedAfter) ? 1 : 0;
}
