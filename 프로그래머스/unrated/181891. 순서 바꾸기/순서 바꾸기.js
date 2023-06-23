function solution(num_list, n) {

    let answer = num_list.splice(n)
    let arr = num_list
    arr.map((v)=> answer.push(v))
    return answer;
}