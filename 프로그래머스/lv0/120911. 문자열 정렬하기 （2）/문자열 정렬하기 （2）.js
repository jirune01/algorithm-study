function solution(my_string) {
    //toLowerCase() 은 문자열만 바꿔준다 
    return  my_string.toLowerCase().split('').sort().join('')
}