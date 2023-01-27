function solution(s) {
    // 숫자안에 e가 들어가는걸 막아준다 
   for(let i =0; i<s.length; i++){
       if(isNaN(Number(s[i])) == true){
       return false;
       }
   }
    
    if(s.length === 4 || s.length ===6){
        return true;
    } 
    else return false;
    
}