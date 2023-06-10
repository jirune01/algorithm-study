function solution(num_list) {
    var answer = num_list.sort((a,b)=> a-b)
    let result = [];
    for(let i = 5; i<answer.length; i++){
        result.push(answer[i])
    }
    return result;
}