function solution(date1, date2) {
    var answer = 0;
    
    
    // 2가 년도가 클 경우 
    if(date1[0] < date2[0]){
        return 1 
    }else if(date1[0] > date2[0]){
        return 0
    }else if(date1[0] == date2[0]){
        // 년도 달 까지 같을 경우 
        if(date1[1] == date2[1]){
           if(date1[2] > date2[2]) return 0 
           else if(date1[2] < date2[2]) return 1
           // 날짜가 다 똑같으면 
           else return 0
        }
        // 년도 같고 달이 다를 경우 
        else {
          if(date1[1] > date2[1]) return 0 
           else if(date1[1] < date2[1]) return 1
        }
       
       
        
        
        
     
    }
    return answer;
}