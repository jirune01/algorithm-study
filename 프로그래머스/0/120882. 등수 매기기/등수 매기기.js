function solution(score) {

    const scoreArr = score.map(([e, m]) => (e + m) / 2);

    const scoreNewArr = [...scoreArr].sort((a, b) => b - a);
    
    return scoreArr.map((v) =>scoreNewArr.indexOf(v) + 1);
}