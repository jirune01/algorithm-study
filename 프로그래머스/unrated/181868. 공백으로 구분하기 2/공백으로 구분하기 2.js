function solution(my_string) {
    const arr = my_string.split(" ")
    var answer = [];
    for(let i =0; i<arr.length; i++){
        if(arr[i] !== ''){
            answer.push(arr[i])
        }
        
    }
    return answer;
}
