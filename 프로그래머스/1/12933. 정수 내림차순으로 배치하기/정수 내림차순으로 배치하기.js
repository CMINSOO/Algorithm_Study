function solution(n) {
    let arr = []
    let a = n.toString()
    for(let i = 0; i < a.length; i++){
        arr.push(a[i])
    }
    
    arr.sort((a,b) => b - a )
    
    return  Number(arr.join(''));
}