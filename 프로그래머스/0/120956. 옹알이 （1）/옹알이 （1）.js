function solution(babbling) {  
  const babyCanSay = ["aya", "ye", "woo", "ma"]

  return babbling.map((item) => {
    for (const say of babyCanSay) {
        if(item.includes(say)){
            item = item.replace(say, " ");
        }
    }
    return item;
  }).filter((str) => !str.trim()).length;
}
