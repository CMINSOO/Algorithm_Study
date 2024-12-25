function solution(n) {
    if(n < 2) return 0
    if(n == 2) return 1
    if(n == 3) return 2
    
    let count = 1
    
    let isPrime = (num) => {
        for(let i = 3; i*i <= num; i+=2){
            if(num % i == 0) return false
        }
        return true
    }
    
    for(let i = 3; i <= n; i+=2){
        if(isPrime(i))count++
    }
    return count
}