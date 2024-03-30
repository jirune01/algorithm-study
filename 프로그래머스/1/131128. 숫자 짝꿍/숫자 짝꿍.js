function solution(X, Y) {
    let answer = ''

    X = X.split("")
    Y = Y.split("")

    for(let i = 0 ; i < 10 ; i ++) {
        const currentX = X.filter(a => Number(a) === i).length
        const currentY = Y.filter(a => Number(a) === i).length
        answer+=String(i).repeat(Math.min(currentX, currentY))
    }

    if(answer === '') return "-1"
    if(Number(answer) === 0) return "0"

    return answer.split("").sort((v,i) => Number(i)-Number(v)).join("")
}