function solution(n) {
    // 피자 한판당 여섯 조각으로 되어있다 
    let piece = 6
    // 같은 수로 나눠질 때까지 +6
    // piece%n이 딱 떨어지면 바로 리턴
    while(piece%n !== 0) {
        piece+=6
    } 
    return piece/6
}