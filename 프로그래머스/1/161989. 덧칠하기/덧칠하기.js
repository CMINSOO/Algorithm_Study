// function solution(n, m, section) {
//     var answer = 0;
    // ///////1. n-1의 길이를 가진 배열을 만들고 각 e 는 0++ 이런 느낌으로 구성하기
    // ///////2. m번 만큼 배열의 요소를 shift해주기
    // ///////3. 배열n에 section의 e가 포함되지 않을때까지의 작업수를 구하기
    // /////// 반복문 뭘 쓰까 map? while?
    // let workArray = Array.from({length: n}, (_, i) => i+1)
    //   section.forEach(e => {
    //     if (workArray.includes(e)) {
    //         workArray.splice(0, m);  // 앞에서 m개의 요소를 제거
    //         answer++;
    //     }
    // }); 실패ㅐㅐㅐㅐㅐㅐㅐㅐㅐ   
//     return answer 
// }
    function solution(n, m, sections) {
    var answer = 0;
    var painted = 0;
    for(var section of sections) {
        if(painted < section) {
            answer++;
            painted = section+m-1;
        }
    }
    return answer;
}