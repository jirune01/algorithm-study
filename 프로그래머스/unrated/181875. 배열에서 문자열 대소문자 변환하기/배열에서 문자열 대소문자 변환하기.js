function solution(strArr) {
    var answer = [];
    for(let i = 0; i< strArr.length; i++){
        // 짝수번째 인덱스는 소문자로
        if(i % 2 ===1) answer.push(strArr[i].toUpperCase())
        // 홀수번째 인덱스는 대문자로
        else answer.push(strArr[i].toLowerCase())
    }
    return answer;
}