function solution(s) {
    const valueLength = s.length;

    if(valueLength % 2 === 0) {
        return s[Math.ceil(valueLength / 2) - 1] + s[Math.ceil(valueLength / 2)]
    } else {
        return s[Math.ceil(valueLength / 2) - 1]
    }    
}

