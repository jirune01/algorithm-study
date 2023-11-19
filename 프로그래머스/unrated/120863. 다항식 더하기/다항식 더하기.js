function solution(polynomial) {
  const splited = polynomial.split(" + ");
  // 공백과 '+'연산 기호 제거하고 값들만 남은 배열

  let xArr = splited
    .filter((v) => v.includes("x"))
    .map((v) => (v.split("x")[0] ? v.split("x")[0] : 1));

  let constArr = splited.filter((v) => !v.includes("x"));

  if (xArr.length && constArr.length) {
    xArr = xArr.reduce((a, b) => +a + +b);
    constArr = constArr.reduce((a, b) => +a + +b);
    return xArr == 1 ? `x + ${constArr}` : `${xArr}x + ${constArr}`;

  } else {
    if (xArr.length) {
      xArr = xArr.reduce((a, b) => +a + +b);
      return xArr == 1 ? "x" : `${xArr}x`;
    }
    if (constArr.length) {
      constArr = constArr.reduce((a, b) => +a + +b);
      return constArr + "";
    }
  }
}