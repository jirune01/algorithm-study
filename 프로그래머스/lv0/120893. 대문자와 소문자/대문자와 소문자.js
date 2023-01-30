function solution(my_string) {
  let result = '';
    //배열일땐 for of 꿀팁
    for(let x of my_string){
        //대문자 일떄 대문자를 소문자로 바꾸고 result로 올라가
        if(x === x.toUpperCase()) result += x.toLowerCase();
        //소문자 일때 소문자를 대문자로 바꾸고 result로 올리기
        else result += x.toUpperCase()
    }
    return result 
}