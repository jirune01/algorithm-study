function solution(dot) {
    // 둘다 양수
   if( 0 < dot[0] && 0 < dot[1] ) return  1
    //dot[0] 양수
   if(dot[0] < 0  && 0 < dot[1]  ) return 2
    
    //둘다 음수 
   if(dot[0] < 0 && dot[1] < 0) return 3
    
    //dot[0] 양수
   if(0 < dot[0]  && 0 > dot[1]  ) return 4
    
}