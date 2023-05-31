function solution(myString, pat) {
    const strLow = myString.toLowerCase()
    const patLow = pat.toLowerCase()
    return Number(strLow.includes(patLow));
}