function solution(chicken) {
    var answer = 0;
    let coup = chicken
    while(coup >= 10){
        let serviceChik = Math.floor(coup/10)
        answer += serviceChik
        coup = serviceChik + Math.floor(coup % 10)
    }
    return answer;
}