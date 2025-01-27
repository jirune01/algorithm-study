function solution(n) {
    var answer = [];
    let arr = String(n)
    let good = arr.split('').reverse().map(Number)
    return good
}