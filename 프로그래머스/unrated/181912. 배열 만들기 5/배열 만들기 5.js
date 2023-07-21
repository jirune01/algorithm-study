function solution(intStrs, k, s, l) {
    const answer = []
    intStrs.forEach(a => {
        const Str = a.slice(s, s+l)
        const num = Number(Str)
        if(num > k) answer.push(num)
    })
    
    return answer
}