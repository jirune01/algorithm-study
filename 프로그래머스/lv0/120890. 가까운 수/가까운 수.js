function solution(array, n) {
   let answer = [];
    // 반복문을 통해서 array[i] - n 수를 구하고 전부 양수로 전환하여 
    // answer 배열에 push 
    for(let i = 0; i<array.length; i++){
        answer.push(Math.abs(array[i] - n))
    }

    // answer배열에서 가장 작은 수를 구함 
    const sm = Math.min(...answer);
    
    // 정답 변수 
    let result  = [];

    // 반복문을 돌려서 정답 찾기 
    for(let j = 0; j < answer.length; j++){
        if(answer[j] === sm){
           result.push(array[j]);
        }
    }
    
    return Math.min(...result);
}