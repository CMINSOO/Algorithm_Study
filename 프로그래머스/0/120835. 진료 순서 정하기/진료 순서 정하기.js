function solution(emergency) {
    var answer = []; 
    //1. 이멀전씨를 내림차순으로 정렬한 변수하나정의
    //2. 기존 이멀전씨 순서를 map을 사용하여 엘레먼트와, 인덱스 구하기
    //3. 정렬된 배열의 원래 인덱스 순을 구하기
    
    
    let sorted = emergency.slice().sort((a,b) => b-a)
    
    return emergency.map((e) => sorted.indexOf(e)+1);
}