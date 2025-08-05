function solution(nums) {
let answer = 0
const isPrime = (num) =>{
    for(let i = 2; i <num; i++){
        if(num % i === 0){
            return false
        }
    }
    return num > 1
  }     
 const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      const combinations = getCombinations(rest, selectNumber - 1); 
      const attached = combinations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });
    return results;
}
   let ansArr =  getCombinations(nums,3)
   for(let i = 0; i < ansArr.length; i++){
       let temp = 0
       ansArr[i].forEach((e) => temp += e)
       if(isPrime(temp))answer++
           
   } 
    return answer;
}


