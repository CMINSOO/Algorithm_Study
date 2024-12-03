function solution(my_string) {
    let element = [...my_string]; 
    let answer = 0
    element = element.map((e) => {
        return isNaN(e) ? '*' : e; // 숫자가 아닌 경우 '*'로 대체
    });

    let result = element.join('').split('*').filter((e) => e != "")
    console.log(result)
    for(let i = 0; i < result.length; i++){
        answer += Number(result[i])
    }
    return answer
}