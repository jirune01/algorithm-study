function solution(n) {
    var answer = 0;
    
    // Math.sqrt(n) n제곱근을 반환합니다.
    let 제곱근 = Math.sqrt(n) 
    // 양의 정수일경우 제곱근에+1 하고 제곱하기 
    //Math.pow(n) n에 제곱하기 
    if(제곱근 % 1 == 0) return Math.pow(제곱근+1, 2)
    // 제곱근 값에 소수점이있을경우  -1리턴
    else return -1
  
}