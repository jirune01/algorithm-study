function solution(num_list) {


    var answer = num_list.reverse()
    if(answer[0] > answer[1]){
        answer.unshift(answer[0] - answer[1] )
    }else{
        answer.unshift(answer[0] * 2)
    }
    return answer.reverse();
}