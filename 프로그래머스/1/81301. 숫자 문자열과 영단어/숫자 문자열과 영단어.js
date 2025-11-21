function solution(s) {
    const numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    for(let i = 0; i < numArr.length; i++) {
        let arr = s.split(numArr[i]);
        s = arr.join(i);
    }

    return Number(s);
}