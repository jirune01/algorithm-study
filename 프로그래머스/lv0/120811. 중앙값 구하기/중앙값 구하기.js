function solution(array) {
    // array안 중간값 인덱스번호 
    let 햄버거 = Math.floor(array.length / 2);
    //중간 값을 구하기 위해 오름차순으로 정렬
    let 오리고기 = array.sort((a, b) => a - b);
    console.log(오리고기)
    return 오리고기[햄버거]
}