function solution(participant, completion) {
    // sort 해서 명단배열이랑 완주배열 인덱스 비교
    let 명단 = participant.sort()
    let 완주 = completion.sort()
    // 명단이 완주보다 기니깐 명단길이만큼 반복하고 
    for(let i =0; i<명단.length; i++){
        // 조건문으로 비교 명단은 완주보다 무조건 기니깐 완주에는 없고 
        // 명단에 있는 값을 리턴
        if( 명단[i] !==완주[i] )   return 명단[i];
    }

}