function solution(keymap, targets) {
    var answer = [];
    let press = 0
    
    targets.map((target) => {
        for(let i =0; i< target.length; i++){
            let count = Infinity
            keymap.map((key) => {
                let idx = key.indexOf(target[i])
                if(idx > -1)  count =Math.min(count, idx+1)
            })
            press += count
        }
        answer.push(press)
        press =0
    })
    for(let j =0; j <answer.length; j++){
        if(answer[j] == Infinity){
            answer[j] = -1
        }
    }
    return answer;
}