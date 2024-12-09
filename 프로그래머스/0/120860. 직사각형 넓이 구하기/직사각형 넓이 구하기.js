function solution(dots) {
    
    //x,y좌표
    const x = dots.map((e) => e[0])
    const y = dots.map((e) => e[1])
    
    //w,l 구하기
    const width = Math.max(...x) - Math.min(...x)
    const length = Math.max(...y) - Math.min(...y)
    
    
    
    return Math.abs(length * width)
}