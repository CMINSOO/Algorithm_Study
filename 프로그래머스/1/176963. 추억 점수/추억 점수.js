function solution(name, yearning, photo) {
    var answer = [];
    let value = 0
    
    photo.map((array) => {
        // e 는 요소 i 는 인덱스
        name.map((e,i) => {
            if(array.includes(e)){
               value += yearning[i]
               } else {
                value += 0
        }
        })
        answer.push(value)
        // 반복문이 끝나기전에 답을 push해주고 다시 초기값으로 돌려주기
        value = 0
    })
    return answer;
}