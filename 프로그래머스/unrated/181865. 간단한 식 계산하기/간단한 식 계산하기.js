function solution(binomial) {
    const [a,l,b] = binomial.split(' ')
    return l == '+'? Number(a)+Number(b) : l == "-" ? a-b : a*b
    // return answer;
}