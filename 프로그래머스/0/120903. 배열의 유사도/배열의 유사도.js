function solution(s1, s2) {
    var answer = 0;
    s1.map((e,i) => {
        for(let i = 0; i <s2.length; i++){
            if(e == s2[i]){
                answer++
            }
        }
    })
    return answer;
}