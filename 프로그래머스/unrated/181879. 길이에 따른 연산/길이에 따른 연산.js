function solution(num_list) {

    let num = 0;
    var result = 1;
    if(num_list.length >= 11){
        for(let i =0; i< num_list.length; i++){
          num = num + num_list[i]
        }
        return num
    }else{
        for(let i =0; i< num_list.length; i++){
            result = result * num_list[i]
        }
        return result
    }


}