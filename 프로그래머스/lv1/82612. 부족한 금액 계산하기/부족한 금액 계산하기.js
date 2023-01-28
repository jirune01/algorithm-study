function solution(price, money, count) {
//    count만큼 순회하며 total에 price * i 를 더한다.
//    만약 money가 totalPrice보다 크면 0을 ,
//    그렇지 않다면 totalPrice - money를 return 한다.
    var total = 0;
    let a = 0
    // 카운터만큼 반복문 돌리고 그 전체값 출력
    for (let i = 1; i <= count; i++) {
        total += price * i;
    }
    // 토탈이 머니보다 크면 토탈- 머니
    if(total > money) return total - money
    else if(total <= money) {
        total = 0;
        return total
    }
    
    

    
}