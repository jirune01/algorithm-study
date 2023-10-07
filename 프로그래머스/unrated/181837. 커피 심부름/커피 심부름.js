function solution(order) {
    let money = 0;
    order.forEach(x => {
        // 아무거나, 아메리카일 경우 
        if (x.includes("anything") || x.includes("americano")) {
            money += 4500;
        } else {
            money += 5000;
        }
    });
    return money;
}