function solution(numbers) {
    var answer = 0;
    //0-9 반복 하게 
 for(let i =0; i<10; i++){
     //includes 사용해서 0-9까지 없는거 파악 파악 
     if(!numbers.includes(i)){
         answer += i
         
     }
 }
    return answer 
}