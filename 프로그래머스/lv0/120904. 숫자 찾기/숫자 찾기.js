function solution(num, k) {
  let result = num.toString().indexOf(k.toString());
  result >= 0 ? (result+= + 1) : -1;
  return result;
}