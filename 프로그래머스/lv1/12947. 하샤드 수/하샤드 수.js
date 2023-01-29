function solution(x) {
    var answer = 0;
    // 문자열을 만들고 배열에 넣기 
    let arr = x.toString().split('')
    // 반복문을 돌려 answer로 넣어 하나하나 더하기
    for(let i = 0; i<arr.length; i++){
      answer += Number(arr[i])
    }
    // x와 더한 값을 나누어 반환되는 나머지를 판별해 조건에 따라 출력
    return (x % answer == 0) ? true : false ;
  
}