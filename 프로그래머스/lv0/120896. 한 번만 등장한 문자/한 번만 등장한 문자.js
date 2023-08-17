function solution(s) {

    let answer = s.split('');
    
    const uniqueArr = [...new Set(answer)].sort();

    let countArr = Array.from(Array(uniqueArr.length)).fill(0);
  
    for(let i of answer) {
        for(let j = 0; j <= uniqueArr.length; j++) {
            if(i === uniqueArr[j]) countArr[j]++;
        }
    }

    let str = '';
    countArr.forEach((e, idx) => {
        if(e === 1) str += uniqueArr[idx];
    })
    return str;
}