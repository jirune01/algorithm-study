function solution(number, n, m) {
    const answer = 0;

    const Num1 = number / n
    const Num2 = number / m
    
    const a =  Number.isInteger(Num1);         
    const b = Number.isInteger(Num2);     
   
    if(a === true && b === true){
        return 1
    }else {
        return 0
    }
}