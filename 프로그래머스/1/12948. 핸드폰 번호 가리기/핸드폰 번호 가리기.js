function solution(phone_number) {
    var answer = '';
    let s = Array.from(phone_number)
    let r = (s.slice(0,-4))
    
    let n = Array.from({length: r.length}, (_,i) => "*")
    answer = n.join('')+ s.slice(-4).join('')
    return answer;
}