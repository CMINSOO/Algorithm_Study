function solution(order) {
    var answer = 0;
    const str = String(order).split('')
    
    for(let e of str){
        if( e == '3'|| e == '6'|| e == '9'){
            answer +=1
        }
    }
    return answer;
}