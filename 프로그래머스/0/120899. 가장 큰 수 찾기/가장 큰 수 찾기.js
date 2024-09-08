function solution(array) {
    var answer = [];
    let value = Math.max(...array)
    let index = array.indexOf(value)
    console.log(index)
    answer.push(value, index)
    return answer
}