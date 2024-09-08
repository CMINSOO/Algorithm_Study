function solution(hp) {
    var answer = 0;
    //장군5 병정3 일개미1   필터링을 순서대로
    let j = 5 
    let b = 3
    let i = 1
    
    let first = Math.floor(hp/j)
    let second = Math.floor((hp-j*first)/b)
    let third = Math.floor((hp - (j*first + second*b))/ i)
    
    
    return answer = (first+ second + third)
}