function solution(s) {
    let arr = [];
    let count = 0;
    
    for(let i = 0; i < s.length; i += 1){
        arr.push(s[i]);
        
        const same = arr.filter((item) => item === arr[0]);
        const notSame = arr.filter((item) => item !== arr[0]);
        
        if(same.length === notSame.length){
            count += 1;
            arr = [];
        }
    }
    
    if(arr.length !== 0){
        count += 1;
    }
    
    return count;
}