function solution(num) {
    for(let i =0; i< 500; i++){
        //1이 아닐때 
        if(num != 1){
            //num 짝수일때                    //num홀수 일떄
            num = num % 2 == 0 ? num / 2 : num * 3 + 1; // 계산진행
        }
        //1일떄 결국 num가 1이 될때까지 얼마나 반복했는지를 알수 있는 값 
        else return i
    }
    //500번 이상했을때 
    return -1;
}