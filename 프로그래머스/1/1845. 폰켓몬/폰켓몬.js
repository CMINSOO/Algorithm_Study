function solution(nums) {
   let arr = new Set()
   let answer = 0
   nums.forEach((e) => {
       arr.add(e)
   })
   
   let nArr = [...arr]
   let choice = Math.round(nums.length/2)
   
   if(nArr.length > choice) {answer += choice}
   else if(nArr.length == choice){answer += choice}
   else if(choice > nArr.length){answer += nArr.length}
    
    return answer
}