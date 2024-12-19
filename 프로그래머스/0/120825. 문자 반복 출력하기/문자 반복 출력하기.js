function solution(my_string, n) {
    let arr = []
    let sArr = my_string.split('')
    
    for(let i = 0; i < sArr.length; i++){
        for(let j = 0; j <n; j++){
            arr.push(sArr[i])
        }
    }
    
    return arr.join('')
}