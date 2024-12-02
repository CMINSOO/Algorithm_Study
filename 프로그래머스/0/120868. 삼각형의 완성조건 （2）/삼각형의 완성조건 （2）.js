function solution(sides) {
    let arr = []
    let unknown = []
    sides.sort((a,b) => a-b)
    let [a,b] = sides   
    //b 가 제일 큰 변 일때
    for(let i = 1; i <= b; i++){
        while(a+i > b && i <= b) {
            arr.push(i)
            i++
        }
    }
    // unknown 이 제일 . 큰변일때
    for(let i = b+1; i < a+b; i++){
        while(i < a+b){
            unknown.push(i)
            i++
        }
    }
    console.log(unknown)
   
    return arr.length + unknown.length
}