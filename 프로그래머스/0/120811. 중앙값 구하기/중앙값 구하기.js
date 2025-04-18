function solution(array) {
    const sortArr = array.sort((a, b) => a - b);
    const arrLength = array.length
    const centerIndex = ~~(arrLength /2)
    
    return sortArr[centerIndex];
}