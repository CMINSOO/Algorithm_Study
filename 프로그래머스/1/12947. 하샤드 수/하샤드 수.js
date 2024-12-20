function solution(x) {
    var answer = true;
    let num = 0
    let idx = 0
    let strX = x+""

    while(idx < strX.length){
        num += Number(strX[idx])
        idx++
    }
    console.log(num)
    return x % num == 0 ? true:false;
}