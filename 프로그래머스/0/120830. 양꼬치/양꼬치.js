function solution(n, k) {
    let answer = 0
    let service = Math.floor(n / 10)
    answer = (n*12000)+(k*2000)-(service * 2000)
    console.log(n, k)
    return answer ;
}