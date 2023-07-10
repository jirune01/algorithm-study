function solution(my_string) {
    var answer = [];
      for (let i = 0; i < my_string.length; i++) {
        let arr = my_string.substring(i, my_string.length);
        answer.push(arr);
    }
    return answer.sort()
}