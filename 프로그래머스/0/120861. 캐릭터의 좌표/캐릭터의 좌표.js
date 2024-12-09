function solution(keyinput, board) {
    // 보드 크기
    const cols = Math.floor(board[0] / 2); // x축 (왼쪽, 오른쪽 제한)
    const rows = Math.floor(board[1] / 2); // y축 (위쪽, 아래쪽 제한)

    // 시작점 (중앙)
    let x = 0;
    let y = 0;

    // 이동 처리
    keyinput.forEach((direction) => {
        if (direction === "left") x -= 1;   // 왼쪽 이동
        if (direction === "right") x += 1;  // 오른쪽 이동
        if (direction === "up") y += 1;     // 위쪽 이동
        if (direction === "down") y -= 1;   // 아래쪽 이동

        // 보드 크기 제한
        x = Math.max(-cols, Math.min(cols, x)); // x좌표 제한
        y = Math.max(-rows, Math.min(rows, y)); // y좌표 제한
    });

    return [x, y];
}
