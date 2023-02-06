function solution(age) {
 // age를 문자형으로 만들고 배열에 담고
    const ageArr = String(age).split("");
    // 인덱스 0-9 알파벳생성
    const Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    
    let result =''
    
    for(let i =0; i< ageArr.length; i++){
        // 맞는 인덱스 찾기
        let num  = Number(ageArr[i])
        // 알파벳에서 맞는인덱스 구하고 result로 보내기
        result += Alphabet[num]
    }
    
    return result
 
}