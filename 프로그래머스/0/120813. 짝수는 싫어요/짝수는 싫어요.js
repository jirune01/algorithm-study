function solution(n) {
    let answerArr = [];

    for(let i = 1; i < n + 1; i++){
        if(i % 2 === 1){
         answerArr.push(i)     
        }
       

    }

    return answerArr;
}