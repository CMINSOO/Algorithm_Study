function solution(slice, n) {
    let index = 1
    
    while((slice * index) <= n){
        if(slice * index >= n){
            break;;
        }
        console.log('@')
        index++
    }
    
    return index
}