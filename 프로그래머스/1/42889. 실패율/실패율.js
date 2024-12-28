function solution(N, stages) {
    var answer = [];
    let temp = {}
    let user = stages.length
    let rv = []
    
    stages.forEach((e) => {
        temp[e] = (temp[e] || 0) +1
    })
    for(let i = 1; i <= N; i++){
        if(temp[i] != undefined && i > 0){
            let fail = temp[i] / user
            user -= temp[i]
            answer.push([i,fail])
        } else if(temp[i] == undefined){
            let fail = 0/user
            answer.push([i,fail])
        }
    }
    for(let i = 0; i < answer.length; i++){
        let temp;
        for(let j = i+1; j <answer.length; j++){
            if(answer[i][1] < answer[j][1]){
                temp = answer[i]
                answer[i] = answer[j]
                answer[j] = temp
            } else if(answer[i][1] == answer[j][1] && answer[i][0] > answer[j][0]){
                temp = answer[i]
                answer[i] = answer[j]
                answer[j] = temp
            }
        }
        rv.push(answer[i][0])
    }
    return rv;
}