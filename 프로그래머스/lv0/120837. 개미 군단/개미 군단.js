function solution(hp) {
    //hp 여치
    // result 최소인원 
    let result = 0;
    
    while(hp >= 5){
        hp-= 5
        result++
    }
    while(hp >= 3){
        hp-= 3
        result++
    }
    while(hp >= 1){
        hp-= 1
        result++
    }
  return result
}