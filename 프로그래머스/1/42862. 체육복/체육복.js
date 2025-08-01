function solution(n, lost, reserve) {
    let answer = 0;
    let arr = Array.from({length: n} , ()=> 1);

    let overlap = lost.filter(e => reserve.includes(e));
    lost = lost.filter(e => !overlap.includes(e));
    reserve = reserve.filter(e => !overlap.includes(e));

   
    for(let i = 0; i < lost.length; i++){
        arr[lost[i] - 1] -= 1;
    }

    // 여벌 적용
    for(let i = 0; i < reserve.length; i++){
        arr[reserve[i] - 1] += 1;
    }

    // 체육복 빌려주기
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            if(arr[i - 1] === 2){
                arr[i]++;
                arr[i - 1]--;
            } else if(arr[i + 1] === 2){
                arr[i]++;
                arr[i + 1]--;
            }
        }
    }

    // 최종 참석 인원 계산
    arr.forEach((e) => {
        if(e > 0) answer++;
    });

    return answer;
}
