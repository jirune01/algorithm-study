function solution(arr1, arr2) {
    var answer = [];
    for(let i =0; i < arr1.length; i++){
        let sum = [];
        for(let o = 0 ; o < arr2[i].length; o++ ){
            sum.push(arr1[i][o] + arr2[i][o]);
        }
        answer.push(sum);
    }
    return answer;
    
}

