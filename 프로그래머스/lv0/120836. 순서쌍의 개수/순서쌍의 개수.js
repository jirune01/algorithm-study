function solution(n) {
    var answer = [];
    //i=0을 넣으면 answr에0 도 들어가기 떄문 n의 길이만큼 반복 
    for(let i = 1; i<= n; i++){
        //n이 되는 쌍을배열에 넣기 
        if(n % i === 0) answer.push(i)
    }
    // answer배열의 깊이만큼 
    return answer.length
}