function solution(my_string) {
    var answer = [];
    const regex = /^[0-9]+$/;
    
    let arr=  my_string.split('').sort()
    
    for(let i = 0; i<arr.length; i++){
    if(regex.test(arr[i] ) ) answer.push(Number(arr[i]))
    }
    
    
    return answer
}