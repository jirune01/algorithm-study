function solution(n) {
  const answer = [];

  for (let i = 2; i <= n; i++) {
    answer[i] = i;
  }

  for (let j = 2; j <= n; j++) {
    if (answer[j] === 0) continue;
    for (let k = j + j; k <= n; k += j) {
      answer[k] = 0;
    }
  }

  return answer.filter((v) => v).length;
}