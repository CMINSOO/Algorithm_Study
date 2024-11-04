function solution(score) {
    let average = score.map(([math,eng]) => (math + eng) /2)
    let sortedAverage = [...average].sort((a,b)=> b-a)
    console.log(sortedAverage)
    return average.map((e) => sortedAverage.indexOf(e) + 1);
}