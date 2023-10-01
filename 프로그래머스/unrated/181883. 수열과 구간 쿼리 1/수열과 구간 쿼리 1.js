function solution(arr, queries) {
    for(let i=0; i<queries.length; i++) {
        for(let a=queries[i][0]; a<=queries[i][1]; a++) {
            arr[a]++
        }
    }
    return arr;
}