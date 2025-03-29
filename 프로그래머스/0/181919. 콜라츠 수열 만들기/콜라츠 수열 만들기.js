function solution(n) {
   const answer = []
   let a = n
    while(a !== 1) {
        answer.push(a)
        if(a%2 === 0) {
            a/=2
        } else {
            a = 3 * a + 1
        }
    }
    answer.push(1)
    return answer
}