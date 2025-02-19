function solution(price, money, count) {
    let totalMoney = 0;

    for (let i = 1; i <= count; i++) {
        totalMoney += price * i;
    }

    if(totalMoney > money) {
      return totalMoney - money
    } else if(totalMoney <= money) {
        totalMoney = 0;
        return totalMoney
    }
    

    
}