function solution(a, b) {
     return a.map((v,i,arr) => v*b[i]).reduce((ac,cr) => ac + cr ,0);
}