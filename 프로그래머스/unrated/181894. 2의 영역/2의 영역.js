function solution(arr) {
    const First = arr.indexOf(2);
    const end = arr.lastIndexOf(2);

    return First === -1 ? [-1] : arr.slice(First, end+1);
}