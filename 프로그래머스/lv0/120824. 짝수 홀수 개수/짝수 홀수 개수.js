function solution(num_list) {
    var answer = [];
    let 홀 = 0;
    let 짝 = 0;
    num_list.map((item )=>{
        if(item % 2 == 0) 짝 ++
        else 홀 ++      
         });
     answer.push(짝, 홀);

       
    return answer;
}