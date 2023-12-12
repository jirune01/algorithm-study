function solution(num, total) {
    let result = []
    
    const center = Math.ceil(total / num)
    const checke = Math.trunc(num / 2)
    const first = center - checke

    for(let i=0; i < num; i++){
        result.push(first + i)
    }
    
    return result
}