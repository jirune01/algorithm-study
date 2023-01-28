function solution(n){
    var answer = 0;
    //숫자니깐 문자열로 바꾸고
    let str = String(n)
   //반복문으로 str에 길이만큼 반복문돌게하고 
     for(let i =0; i< str.length; i++){
         // str[i] 를 넘버로 만들고 각각 다 answer로 넣기 
         answer += Number(str[i])
     }
   return answer
   


}