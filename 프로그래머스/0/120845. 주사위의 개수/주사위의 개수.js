function solution(box, n) {
   let [ horizon, vertical, height] = box
    
    let answer = Math.floor(horizon/n) * Math.floor(vertical/n)*Math.floor(height/n)
    return answer;
}