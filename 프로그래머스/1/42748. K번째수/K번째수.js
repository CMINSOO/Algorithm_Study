function solution(array, commands) {
    var answer = [];
    //1. commands 는 i, j , k 로 이루어져있음
    //2. commands 는 *배열안에 배열이 있음
    //3. 반복문을 돌려서 commands가 총 3개의 조건이 있으니 commands가 있는만큼 돌려야한당
    for(let i = 0; i < commands.length; i++){
        //4. 배열을 i부터 j까지 잘라버뤼기
        let newArr = array.slice(commands[i][0]-1, commands[i][1])
        newArr.sort((a,b)=> a-b)
        console.log(newArr)
        answer.push(newArr[commands[i][2]-1])
    }
    return answer;
}