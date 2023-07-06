function solution(my_string, s, e) {
  let mi = my_string.substring(s, e + 1);
  let sb = mi.split('').reverse().join('');
   
  return my_string.substring(0, s) + sb + my_string.substring(e + 1);
}