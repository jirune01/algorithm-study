function solution(k, score) {
    let result = [];
    let nums = [];
    
    score.forEach(item => {
        nums.push(item);
        nums.sort((a,b) => b - a).splice(k);
        
        result.push(Math.min.apply(null, nums));
    });

    return result;
}