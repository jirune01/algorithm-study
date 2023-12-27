function solution(picture, k) {
    let answer = [];

    picture.map((v) => {
        const result = [...v].map((d) => d.repeat(k)).join('');
        for(let i = 0; i < k; i++) answer.push(result);
    });

    return answer;
}