function solution(dots) {
    let result = 0 
    let [a,b,c,d] = dots
    if(calculateSlope(a,b) === calculateSlope(c,d)){
        result = 1
    }  
    if(calculateSlope(a,c) === calculateSlope(b,d)){
        result = 1
    } 
    if(calculateSlope(a,d) === calculateSlope(b,c)){
        result = 1
    } 
    return result
}

 function calculateSlope (arr1, arr2){
        return (arr1[1] - arr2[1]) / (arr1[0] - arr2[0])
    }