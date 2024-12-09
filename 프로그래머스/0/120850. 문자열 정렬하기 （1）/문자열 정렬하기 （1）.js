function solution(my_string) {
    var answer = [];
    let arr = my_string.split('')
    arr.map((e) => {
        if(e >= 0)
        answer.push(Number(e))
    })
    return answer.sort((a,b) => a -b)
}