function solution(arr) {
    let answer = 0;
    //배열에 값을 다 더하고
    for(let i = 0; i < arr.length; i++) {
       answer += arr[i]
    }
    // 그 값을 길이로 나누기 
     return answer / arr.length

}