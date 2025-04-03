function solution(babbling) {  
  const babySay = ["aya", "ye", "woo", "ma"]

  return babbling.map((item) => {  
      for (const say of babySay) {  
        if (item.includes(say)) {  
          item = item.replace(say, ' ');  
        }
      }
      return item;  
    })
  .filter((str) => !str.trim())
  .length;
}
