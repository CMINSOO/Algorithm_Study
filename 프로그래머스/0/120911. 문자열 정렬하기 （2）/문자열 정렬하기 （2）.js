function solution(my_string) {
    var answer = my_string.toLowerCase().split('').sort((a,b) => a.localeCompare(b)).join('');
    console.log(my_string.toLowerCase().split('').sort((a,b) => a.localeCompare(b)).join(''))
    return answer;
}