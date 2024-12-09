function solution(numbers) {
    const emptyArr = []
    const sorttedArr = numbers.sort((a,b) => a- b)
    const first = sorttedArr.pop()
    const second = sorttedArr.pop()
    console.log(first, second)
    const firstValue = first * second
    
   sorttedArr.forEach((e) => {
       if(e < 0){
          emptyArr.push(e)
       }
   })
    console.log(emptyArr)
    const bFirst = emptyArr[0]
    const bSecond = emptyArr[1]
    
    const secondValue = bFirst * bSecond
    
    console.log(firstValue, secondValue)
    if( firstValue > secondValue || isNaN(secondValue)) {
        return firstValue
    } else return secondValue
}