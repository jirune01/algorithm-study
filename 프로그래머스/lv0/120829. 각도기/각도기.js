function solution(angle) {
    if(angle > 90){
        if( angle == 180) return 4
        else  return 3
    }
    //예각 
    else if( angle < 90 && angle > 0) return 1
    else if( angle == 90) return 2
}