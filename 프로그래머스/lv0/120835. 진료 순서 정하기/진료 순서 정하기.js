function solution(emergency) {
     // 새로운 배열을 생성 후 숫자가 큰 수도 정렬 
    let bigArr = emergency.slice().sort((a,b)=>b-a);
    
    return emergency.map((item) => bigArr.indexOf(item) + 1 );
}