function solution(my_string, num1, num2) {
    let result = my_string.split('')
    // num1에 위치에  my_string[num2] 값 넣기
    //.splice 배열원본을 건드리기 때문에  my_string 로가져온다 
    result.splice(num1, 1, my_string[num2])
    result.splice(num2, 1, my_string[num1])
    return result.join('')
}
