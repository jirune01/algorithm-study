function solution(arr) {
    const first = arr.indexOf(2);
    const end = arr.lastIndexOf(2);

    return first === -1 ? [-1] : arr.slice(first, end+1);
}