function solution(s) {
    // 단어와 숫자를 매칭하는 객체 생성
    const numMap = {
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9",
        "zero": "0"
    };

    for (let [word, digit] of Object.entries(numMap)) {
        s = s.split(word).join(digit);
    }

    return parseInt(s, 10);
}
