function solution(score) {
    const arr = score.map(([eng, math]) => (eng + math) / 2);
    const newarr = [...arr].sort((a, b) => b - a);
    
    return arr.map((v) => newarr.indexOf(v) + 1);
}