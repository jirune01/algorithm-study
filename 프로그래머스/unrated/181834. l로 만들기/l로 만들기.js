function solution(myString) {
    var answer = '';
    for(let i = 0; i<myString.length; i++){
        if(myString[i] > 'l'){
            answer += myString[i]
        }else{
           answer += 'l'
        }
    }
    return answer;
}