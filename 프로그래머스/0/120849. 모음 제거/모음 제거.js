function solution(my_string) {
    const alpha = ["a", "e", "i", "o", "u"]; 
    let arr = my_string.split(""); 
    let result = arr.filter((e) => !alpha.includes(e)); 
    return result.join(""); 
}
