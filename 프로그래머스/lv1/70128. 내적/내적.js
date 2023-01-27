function solution(a, b) {
    //0으로 
    var answer = 0;
    //반복문으로 돌려서 
    for(let i =0; i< a.length; i++){
        //a[0] * a[0] ~~~...~~~ a[마지막인덱스] * b[마지막인덱스]
        // 그걸 answer  += 해서 넣고
        answer += a[i]*b[i];
    }
    //출력 하면 끝~~~~~~~~
    return answer;
}