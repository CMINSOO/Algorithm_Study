function solution(numbers) {
    let arr = numbers.sort((a,b) => a- b)
    console.log(arr)
    let first = arr.pop()
    let second = arr.pop()
    return first * second
}