function solution(arr, n) {
  return arr.map((v, i, arr) => {
    if(arr.length % 2 === 1) {
      if(i%2 === 0) return v + n;
      else return v;
    } else if(arr.length % 2 === 0) {
      if(i % 2 === 1) return v + n;
      else return v;
    }
  });
}