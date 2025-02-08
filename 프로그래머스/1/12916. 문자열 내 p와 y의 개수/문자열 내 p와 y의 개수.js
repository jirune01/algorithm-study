function solution(s){
    let upperCase = s.toUpperCase();
    let P = upperCase.split("P").length;
    let Y = upperCase.split("Y").length;
    
    const result = P === Y ? true : false
    
    return result
    
}