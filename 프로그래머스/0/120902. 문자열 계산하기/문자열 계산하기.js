function solution(my_string) {
   
    let val = my_string.split(' ')
     let answer=  Number(val[0])
    for(let i = 1; i < val.length; i+=2){
        if(val[i] == '+'){
            answer += Number(val[i+1])
        } else if(val[i] == '-'){
            answer -= Number(val[i+1])
        }
        
    }
    return answer
}