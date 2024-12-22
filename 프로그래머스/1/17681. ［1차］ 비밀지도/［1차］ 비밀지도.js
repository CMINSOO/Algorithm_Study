function solution(n, arr1, arr2) {
    const new1 = fixLength(arr1.map(e => e.toString(2)), n);
    const new2 = fixLength(arr2.map(e => e.toString(2)), n);
    
    const result = new1.map((e,i) => {

        let e2 = new2[i]
        console.log(e)
        let merge = e.split('').map((b,j) => (b == '1' || e2[j] == '1') ? '#':' ').join('')
    return merge
    })
    
    return result
}

function fixLength(arr,n){
   return arr.map((e) => e.padStart(n,'0'))
}