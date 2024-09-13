function solution(my_string, num1, num2) {
    
    let a = my_string[num1]
    let b = my_string[num2]
    
    const c = my_string.split('')
    c[num1] = b
    c[num2] = a
    

    return c.join('')
}