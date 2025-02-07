function solution(arr) {
    const minValue = Math.min(...arr)
    return arr.length === 1 ? [-1] : arr.filter(i => i !== minValue)
}



