function solution(num_list) {
    let even = 0;
    let odd = 0;
    for(let i=0; i<num_list.length; i++){
        if(i % 2 === 0){
            even = even + num_list[i]
        } else{
            odd = odd + num_list[i]
        }
    }
    
    if(odd > even) return odd
    else {
        return even
    }

}