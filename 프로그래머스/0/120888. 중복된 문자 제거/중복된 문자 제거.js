function solution(my_string) {
    let uniqueStr = [...new Set(my_string)]
    console.log(uniqueStr)
    return uniqueStr.join('')
}