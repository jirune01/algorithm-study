function solution(num, n) {
    var good = num / n
    let answer =  Number.isInteger(good); 
    if(answer){
        answer = 1
    }else{
        answer = 0
    }
    return answer;
}