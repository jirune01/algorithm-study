function solution(n) {
    var answer = [];
    // 약수를 구하기 위해 반복문 n 만큼 돌리고 
    for(let i=1; i<=n; i++ ){
    // 조건에 따라 나머지가 없을 경우 answer로 맞는 i값 올리기
        if(n % i == 0 ){
            answer.push(i)
        }
        
    }
    //리턴
     return answer
}