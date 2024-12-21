function solution(numbers) {
  let result = []
  let arr = new Set(combination(numbers))
    return [...arr].sort((a,b) => a-b)
}

function combination(arr){
    let result = []
    for(let i =0; i <arr.length; i++){
        for(let j = i+1; j <arr.length; j++){
            result.push(arr[i]+arr[j])
        }
    }
    return result
}