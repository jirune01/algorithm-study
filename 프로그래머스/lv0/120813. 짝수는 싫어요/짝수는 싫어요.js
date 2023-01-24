function solution(n) {
    var answer = [];
    for(let i=0; i<n+1; i++){
        if(i !==0 && i % 2 === 1  ) {
           answer.push(i)
        }
        
    }
    return answer
}

// 반복문을 n