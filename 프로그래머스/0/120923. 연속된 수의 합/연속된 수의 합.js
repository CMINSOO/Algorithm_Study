function solution(num, total) {
    var answer = [];
    let start= Math.ceil(total/num) - Math.floor(num/2)
    console.log(start)
    for(let i = 0; i < num; i++){
        answer.push(start+i)
    }
    return answer;
}