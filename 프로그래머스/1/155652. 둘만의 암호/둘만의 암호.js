function solution(s, skip, index) {
    
    const sample = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
    const avoid = skip.split('')
    const filtered = sample.filter((e) => {
       return !avoid.includes(e)
    })
    let answer = []
    for(let i = 0 ; i < s.length; i++){
      let idx = filtered.indexOf(s[i])
      let newIndex =  idx+index
     
      while(newIndex >= filtered.length){
          newIndex -= filtered.length
      }
    
      answer.push(filtered[newIndex])
    }

    return answer.join('')
}