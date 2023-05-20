function solution(num_list) {
    let 짝수 = [];
    let 홀수 = [];
    
    for(let i = 0; i<num_list.length; i++){
        if(num_list[i] % 2 === 0){
            짝수.push(num_list[i] )
        }else{
          홀수.push(num_list[i] )
        }
    }
    const 값1 = 짝수.join('')
    const 값2 = 홀수.join('')
  return Number(값1)+ Number(값2)

}