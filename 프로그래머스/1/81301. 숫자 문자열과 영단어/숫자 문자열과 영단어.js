function solution(s) {
    let sNumber = {
        'zero': 0,
        'one' : 1,
        'two' : 2,
        'three' : 3,
        'four' :4,
        'five' : 5,
        'six' : 6,
        'seven' : 7,
        'eight' : 8,
        'nine' : 9
    }
    
    for(let [word,num] of Object.entries(sNumber)){
       s = s.replaceAll(word, num)
    }
    
    return Number(s)
}