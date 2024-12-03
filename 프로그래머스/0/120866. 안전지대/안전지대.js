function solution(board) {
    //폭탄기준 상하좌우대각선까지의 좌표
    let x = [-1,-1,-1,0,0,1,1,1]
    let y = [-1,0,1,-1,1,-1,0,1]
    
    //보드의 길이를 구하고 정사각형이기때문에 총 자릿수 를 반환해주기
    let length = board.length
    let answer = length * length
    
    //위험지역 좌표를 저장할 빈배열
    let dz = []
    
    //보드에서 폭탄의 좌표를 구해주고 추가한만큼 답에서 자릿수빼주기
    for(let i = 0; i < length; i++){
        for(let j = 0; j <length; j++){
            if(board[i][j] == 1){
                dz.push([i,j])
                answer --
            }
        }
    }
    
    // 폭탄의 좌표를  토대로 상하좌우대각선의 좌표의숫자를 1로 표기해고, 한만큼 답에서 자릿수빼주기
    // dz는 지금 2차원배열형태로 저장되어있음
    dz.forEach((e) => {
        //상하좌우대각선의 x,y축은 현재총8개 이기때문에 k를 8로 제한을 둔것
       for(let k = 0; k < 8; k++){
           //폭탄근처의 위험지역구하기
           let wzx = e[0] + x[k]
           let wzy = e[1] + y[k]
           
           // board에서 구한 위험지역의 좌표에 숫자를 1로 바꿔주기
           // wzx 와 wzy가 유효한좌표인지 확인해야함
           if(wzx < length && wzy <length && wzx >= 0 && wzy >=0 ){
               //해당좌표가 0인지를 확인함으로 인해 중복검사피하기
               if (board[wzx][wzy] == 0){
                   board[wzx][wzy] = 1
                   answer--
               }
               
               console.log(board)
           }
       }
    })
    return answer
}