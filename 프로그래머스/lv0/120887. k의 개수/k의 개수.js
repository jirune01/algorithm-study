function solution(i, j, k) {
    var answer = 0;
    for(let a = i; a<=j; a++){
       if(a.toString().includes(k.toString())){
           answer += a
            .toString()
            .split("")
            .filter((str) => str === k.toString()).length;
        }
    }
    
    return answer;
}