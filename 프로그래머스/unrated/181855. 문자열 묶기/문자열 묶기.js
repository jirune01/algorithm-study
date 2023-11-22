function solution(strArr) {
   const arr = strArr.map(x => x.length);
    
    const answer = {};
    arr.forEach((x) => { 
        answer[x] = (answer[x] || 0)+1; 
    });
    return Math.max(...Object.values(answer));
}