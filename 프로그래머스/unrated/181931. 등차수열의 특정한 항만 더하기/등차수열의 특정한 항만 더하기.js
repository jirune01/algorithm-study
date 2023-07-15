function solution(a, d, included) {
    var answer = 0;
        for(let i = 1; i <= included.length; i++){
            if(included[i - 1] == true)
                answer += (a + (i - 1) * d);
        }
    return answer;
}