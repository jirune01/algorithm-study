function solution(a, b) {
    let ab = String(a) + b
    let cd = 2 * a * b
    return ab >= cd ? Number(ab) : Number(cd) 
}