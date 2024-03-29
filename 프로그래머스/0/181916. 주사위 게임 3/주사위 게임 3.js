function solution(a, b, c, d) {
    const maxArr = Math.max(a,b,c,d); 
    const minArr = Math.min(a,b,c,d); 
    
    let maxCount = 0; 
    let minCount = 0; 
    
    const arr = [a,b,c,d]; 
    
    arr.forEach((el)=>{
        if(el === maxArr) maxCount++
        else if(el === minArr) minCount++
    })
    

    if(maxCount === 4) return 1111 * maxArr;

    if(maxCount === 3) return (10 * maxArr + minArr) * (10 * maxArr + minArr);
    if(minCount === 3) return (10 * minArr + maxArr) * (10 * minArr + maxArr);
    
    if(maxCount === 2 && minCount === 2) return (maxArr + minArr) * Math.abs(maxArr - minArr); 

    if(a === b) return c * d;
    if(a === c) return b * d;
    if(a === d) return b * c;
    if(b === c) return a * d;
    if(b === d) return a * c;
    if(c === d) return a * b;
    
    return minArr;

    
}