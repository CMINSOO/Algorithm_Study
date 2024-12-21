function solution(s) {
    let arr = s.split('')
    for(let i = 0; i <arr.length; i++){
        let index;
        for(let j = 0; j<arr.length -1 -i; j++){
            if(arr[j] < arr[j+1]){
                index = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = index
            }
        }
    }
    return arr.join('')
}