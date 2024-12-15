function solution(numbers, direction) {
    if(direction == "right"){
        let move = numbers.pop()
        console.log(move)
        numbers.unshift(move)
    } else if ( direction == "left"){
        let move = numbers.shift()
        console.log(move)
        numbers.push(move)
    }
    return numbers
}