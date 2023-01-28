function solution(s){
    var answer = true;
    let 대문자 = s.toUpperCase();
    // split('x').length 
    let P = 대문자.split("P").length;
    let Y = 대문자.split("Y").length;
    
    if(P == Y) return true
    else if(P !== Y) return false
    
}