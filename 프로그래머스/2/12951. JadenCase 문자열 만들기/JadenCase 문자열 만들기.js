function solution(s) {
   let answer = '';
   let result = s.split(' ');

   let newResult = result.map(x=> x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());

    answer = newResult.join(" ")
    return answer;
}