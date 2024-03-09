function solution(babbling) {
    const c = ['aya','ye','woo','ma'];
    let count = 0;
    
    for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i];
        
        for(let j = 0; j < c.length; j++){
            if(babble.includes(c[j].repeat(2))){
                break;
            }
            
            babble = babble.split(c[j]).join(" ");
        }
        
        if(babble.split(" ").join("").length === 0){
            count += 1;
        }
    }
    
    return count;
}