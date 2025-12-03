function solution(todo_list, finished) {
    let notYetList = [];

    for(let i = 0; i < todo_list.length; i++){
        if(!finished[i]){
            notYetList.push(todo_list[i])
        }    
    }
    
    return notYetList;
}