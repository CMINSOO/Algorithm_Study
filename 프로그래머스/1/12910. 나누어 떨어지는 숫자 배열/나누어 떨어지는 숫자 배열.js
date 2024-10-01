function solution(arr, divisor) {
    var answer = [];
    //1. for 문을 사용해서 arr의 개수만큼 반복돌리기
    //2. 만약에 div. 로 나눠지는 숫자들을 배열에 푸쉬하고 오름차순으로 정렬
    //3. 만약에 어떠한 숫자고 나눠지지 않는다면 -1push 해버리기!
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % divisor === 0){
            answer.push(arr[i])
            console.log(answer)
        }  
    }
    answer.sort((a,b) => a - b)
    return answer.length > 0 ? answer : [-1];
}