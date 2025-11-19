function solution(ingredient) {
    let burger = 0;
    
    for(let i = 0; i < ingredient.length; i++) {
        // 빵 야채 고기 빵 일떄
        if(ingredient.slice(i, i + 4).join('') === '1231') {
            burger++;
            ingredient.splice(i, 4)
            i -= 3
        }
    }
    return burger
}


