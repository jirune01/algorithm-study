function solution(array) {

   //배열안 가장 큰 수 구하기, 배열안 가장 큰 인덱스 구하기 그걸 배열안에 쏙 넣기 
return [Math.max(...array) ,array.indexOf(Math.max(...array))]
  

}