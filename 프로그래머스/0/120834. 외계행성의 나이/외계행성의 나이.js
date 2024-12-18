function solution(age) {
    let alpha = 'abcdefghij'
    console.log(Array.from(age.toString()).map(e => alpha[+e]).join(''))
    return  Array.from(age.toString()).map(e => alpha[e]).join('');
}