function solution(s) {
    var answer = '';
    let arr = s.split('')
    
    for(let e of arr){       
            if(s.indexOf(e) === s.lastIndexOf(e)){
                answer += e
            } 
    }
    return answer.split('').sort().join('')
}