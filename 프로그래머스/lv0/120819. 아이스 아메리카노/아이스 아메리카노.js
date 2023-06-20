function solution(money) {
   let coffee = 5500
   return [~~(money / coffee), money % coffee];
}