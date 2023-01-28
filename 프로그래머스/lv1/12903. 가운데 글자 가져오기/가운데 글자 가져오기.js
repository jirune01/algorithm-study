function solution(s) {
    let len = s.length; 
    
    if(len % 2 === 0){
        return  s[Math.ceil(len / 2) -1] + s[Math.ceil(len / 2)];
    }
    //홀수일떄  
     else  return s[Math.ceil(len / 2) -1];

    

}