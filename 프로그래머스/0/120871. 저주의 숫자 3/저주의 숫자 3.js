function solution(n) {
    //n의 길이를 가진 배열을 만들기
    let arr = []
    let value = 1
    
    while(arr.length < n){
        if(check(value) == false){
            arr.push(value)
        }
        value++
    }
    
    return arr.pop()
}
            
function check(number) {
     return number % 3 === 0 || number.toString().includes('3');
}