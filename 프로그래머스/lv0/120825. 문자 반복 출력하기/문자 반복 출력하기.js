function solution(my_string, n) {
    var answer = [...my_string];
    return answer.map((a) => a.repeat(n)).join('')
}