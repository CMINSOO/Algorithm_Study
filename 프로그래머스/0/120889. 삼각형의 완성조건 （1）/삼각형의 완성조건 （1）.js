function solution(sides) {
    sides.sort((a,b)=> a-b)
    console.log(sides)
    if(sides[0]+sides[1] <= sides[2]){
        return 2
    } else return 1
}