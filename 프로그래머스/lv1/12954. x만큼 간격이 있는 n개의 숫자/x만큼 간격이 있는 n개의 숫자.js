function solution(x, n) {
    var answer = [];    
    // i를 1를 설정하고 반복문을 n에 갯수까지 실행해서 그값을 push로 answer에 투입 
    for(let i =1; i <= n; i++){
       answer.push(x*i)
    }
  return answer
}