function solution(lottos, win_nums) {
   let matchCount = 0;
   let possible = 0;

    for (let i = 0; i < lottos.length; i++) {
     if (win_nums.includes(lottos[i])) {
        matchCount += 1;
     }
     if(lottos[i] == 0){
         possible += 1
     }
    }
    const min = matchCount
    const max = matchCount +  possible
 
    
    const getRank = (e) => {
        return  e >= 2 ? 7- e : 6
    }
    
    return [getRank(max), getRank(min)];
}