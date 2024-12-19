function solution(n) {
    let lcm = getLcm(n,6)
    console.log(lcm)
    let answer = lcm / 6
    return answer;
}
function getLcm(num1,num2){
    let lcm = 1
    
    while(true){
        if((lcm % num1 == 0) && (lcm % num2 == 0)){
            break;
        }
        lcm++
    }
    console.log('#',lcm)
    return lcm
}