function solution(arr1, arr2) {
    let add1 =0;
    let add2=0;
    arr1.map((v)=> add1+= v)
    arr2.map((v)=> add2+= v)
    if(arr1.length < arr2.length) return -1
    else if(arr1.length > arr2.length) return 1
    else if(arr1.length === arr2.length && add1 == add2) return 0
    else if(arr1.length === arr2.length && add1 > add2) return 1
    else if(arr1.length === arr2.length && add1 < add2) return -1
}