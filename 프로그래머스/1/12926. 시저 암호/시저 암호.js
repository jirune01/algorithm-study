function solution(s, n) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    let result = '';

    for(let i = 0; i < s.length; i++){
        let text = s[i];
        if(text === ' ') {
            result += ' '; 
            continue;
        }
        let arr = upper.includes(text) ? upper : lower;
        let idx = arr.indexOf(text) + n;

        if(idx >= arr.length) idx -= arr.length;
        
        result += arr[idx];
    }
    return result; 
}