function solution(s) {
    var answer = s.split(' ')
    
    let result = '';
    for(let i =0; i<answer.length; i++){
        for(let j =0; j< answer[i].length; j++){
            if(j % 2 === 0){
              result += answer[i][j].toUpperCase();
            }else{
             result +=  answer[i][j].toLowerCase();
            }
        }
        // 각 단어들의 띄어쓰기를 위한 조건문
        if(i< answer.length-1 ) result += ' ';
        
    }
    
    return result;
}