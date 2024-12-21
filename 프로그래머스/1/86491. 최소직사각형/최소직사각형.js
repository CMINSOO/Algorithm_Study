function solution(sizes) {
    let a = [];
    let b = []
   for(let i = 0; i <sizes.length; i++){
       sizes[i].sort((a,b) => a-b)
       a.push(Math.max(sizes[i][0]))
       b.push(Math.max(sizes[i][1]))
   }
    a.sort((a,b) => a)
    let fa = sorting(a)
    let fb = sorting(b)
    console.log(fa,fb)
    return fa[0]*fb[0]
}

function sorting(arr){
    arr.sort((a,b) =>  b - a)
    
    return arr
}