function solution(n) {
    var answer = 0;
    // 짝수일때   
    if(n % 2 ===0){
     for(let i = n; i > 0; i --){
         if(i % 2=== 0){
            answer = answer + (i*i)
         }
     }
    }
    // 홀수일때 
    else{
      for(let i = n; i > 0; i--){
          if(i % 2 !== 0){
             answer += i
          }
      }
    }
    return answer;
}