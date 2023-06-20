function solution(a, b) {
    let anum = String(a) + String(b)
    let bnum = String(b) + String(a)
    return anum >= bnum ? Number(anum) : Number(bnum)
}