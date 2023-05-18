function solution(num_list) {
    let answer = 1;
    let add = 0;

    for(let i =0; i<num_list.length; i++){
        answer = answer * num_list[i]
    }
    
    for(let j =0; j<num_list.length; j++){
        add = add + num_list[j]
    }

    if(answer < add*add){
        return 1
    }else if(answer > add*add){
        return 0
    }
    
}