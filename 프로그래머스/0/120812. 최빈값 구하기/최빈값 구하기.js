function solution(array) {
    let result = {}
    
    array.forEach((e) => {
        result[e] = (result[e] || 0) +1
    })
    
    let maxKey = -1
    let maxCount = 0
    let isDuplicate = false
    
    for(let e in result){
        console.log('#',e,'@',result[e],"!",isDuplicate)
        
        if(result[e] > maxCount ){
            maxCount = result[e]
            maxKey = e
            isDuplicate = false
        } else if(result[e] ==maxCount){
            isDuplicate = true
            console.log('^',isDuplicate)
        }
    }
    
   
    return isDuplicate ? -1 : Number(maxKey)
}