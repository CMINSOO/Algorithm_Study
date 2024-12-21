function solution(d, budget) {
    let count = 0
    let ck = 0
    
    d.sort((a,b) => a-b)
    
    for(let cost of d){
        if(ck + cost > budget) break;
        
        ck += cost
        count++
    }
    
    return count
}