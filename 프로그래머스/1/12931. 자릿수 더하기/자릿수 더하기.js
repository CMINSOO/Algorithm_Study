function solution(n)
{
    var answer = 0;
    let a = n.toString()
    let idx = 0

    while(idx < a.length){
        answer += Number(a[idx])
        idx++
    }
    
    return answer;
}