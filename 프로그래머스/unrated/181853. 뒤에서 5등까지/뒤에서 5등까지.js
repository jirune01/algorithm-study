function solution(num_list) {
 const aswer = num_list.sort((a, b) => { return a - b })

     return aswer.slice(0,5)
}