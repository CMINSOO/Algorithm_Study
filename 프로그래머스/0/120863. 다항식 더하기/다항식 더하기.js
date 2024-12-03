function solution(polynomial) {
    let answer = []
    let xCount = 0
    let nCount = 0
    let item = polynomial.replace(/\s+/g, '').split('+')
  
    item.forEach(e => {
        if(e.includes('x')){
            if(e === 'x'){
                xCount += 1
            } else {
                xCount += parseInt(e.replace('x', ''),10)
            }
        }  else {
            nCount += parseInt(e, 10)
        }
    })
    
    if(xCount !== 0 && xCount !==1) answer.push(`${xCount}x`)
    if(xCount == 1) answer.push(`x`)
    if(nCount !== 0) answer.push(`${nCount}`)
    return answer.join(' + ')
}