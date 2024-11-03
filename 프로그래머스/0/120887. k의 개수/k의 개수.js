function solution(i, j, k) {
    var answer = 0;
    let newArr = Array.from({length: j - i +1}, (_,index) => i+index )
     newArr.forEach((num) => {
        answer += num.toString().split(k.toString()).length - 1;
    });
    return answer;
}