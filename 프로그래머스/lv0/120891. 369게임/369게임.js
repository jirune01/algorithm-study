function solution(order) {
    let 배열s = [...(""+order)] //2,9,4,2,3
    
    삼육구 = 0
    for (i=0; i < 배열s.length; i++){
        if (배열s[i] == 3 || 배열s[i] == 6 ||배열s[i] == 9 && 배열s[i] !== 0)  {
            삼육구 ++ 
        } 
      
        
    }
    
    return 삼육구;
}
  