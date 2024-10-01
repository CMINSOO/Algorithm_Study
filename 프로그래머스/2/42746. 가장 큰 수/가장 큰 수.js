function solution(numbers) {
    let answer = '';
    //1. numbers들을 전부 string 형식으로 바꿔주기
    //2. 문자열화된 numbers를 합쳤을때 큰순으로 정렬하기
    //3. 배멸이 0으로만 이루어질수 있는 경우를 예외처리하기
    const stringfiedNumbers = numbers.map(numbers => String(numbers))
    console.log(stringfiedNumbers)
    answer = stringfiedNumbers.sort((a,b) =>(b+a) - (a+b)).join('')
    if(answer[0] == "0"){
        return "0"
    }
    return answer;
}