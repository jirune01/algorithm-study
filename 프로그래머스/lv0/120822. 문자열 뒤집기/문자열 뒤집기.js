function solution(my_string) {
   let a = my_string.split('').reverse((a,b)=>b-a).join('')
   
return a
  
}