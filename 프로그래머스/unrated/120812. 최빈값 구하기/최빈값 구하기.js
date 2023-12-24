function solution(array) {
    
 const counts = array.reduce((acc, element) => {
        acc[element] = (acc[element] || 0) + 1;
        return acc;
    }, {});
    

    let maxCount = Math.max(...Object.values(counts));
    

    if (Object.values(counts).filter(v => v === maxCount).length > 1) {
        return -1;
    }
    

    let mode = Object.keys(counts).find(key => counts[key] === maxCount);
    
    return parseInt(mode);
}