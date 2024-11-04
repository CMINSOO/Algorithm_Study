function solution(id_pw, db) {
    var answer = 'fail';
    
    for (let i = 0; i < db.length; i++) {
        const e = db[i];
        if (id_pw[0] === e[0] && id_pw[1] === e[1]) {
            answer = 'login';
            break;
        } else if (id_pw[0] === e[0] && id_pw[1] !== e[1]) {
            answer = 'wrong pw';
            break;
        }
    }
    
    return answer;
}
