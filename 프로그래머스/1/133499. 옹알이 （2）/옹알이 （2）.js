function solution(babbling) {
    let answer = 0
    let sample = ['aya', 'ye', 'woo', 'ma']
    
    for(let word of babbling){
        let isValid = true
        let checked = ""
        
        while(isValid && word.length > 0){
            let found = false
            
            for(let s of sample){
                if(word.startsWith(s) && checked != s){
                    word = word.slice(s.length)
                    checked = s
                    found = true;
                    break;
                }
            }
            
            if(!found){
                isValid = false
            }
        }
        if(isValid && word.length == 0) answer++
    }
    
    return answer
}