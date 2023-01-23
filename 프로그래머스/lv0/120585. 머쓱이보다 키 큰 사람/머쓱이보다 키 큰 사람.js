function solution(array, height) {
    // 조건보다 키큰 사람수
    var result = 0;
    // 반복문으로 돌려 array 배열에 있는거 하나하나 조건에 비교
    // 맞으면 result 하나 증가 배열 갯수만큼 반복하기 ! 
    for(let i =0; i< array.length; i++){
        if( array[i] > height){
            result ++;
        }
    }
    return result;
}