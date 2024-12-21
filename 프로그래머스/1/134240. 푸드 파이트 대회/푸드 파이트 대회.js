function solution(food) {
    let answer = ""
    let val = "";
    let reverse = "";
    for(let i = 1; i < food.length; i++){
       if(food[i] % 2 != 0){
           food[i] -= 1
       }
        for(let j = 0; j <food[i]/2; j++){
        val += i
    } 
    }
    reverse = val.split('').reverse().join('')
    console.log(reverse)
    return  val + '0' + reverse
}