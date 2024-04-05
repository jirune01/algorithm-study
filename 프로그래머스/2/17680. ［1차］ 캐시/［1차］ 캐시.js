function solution(cacheSize, cities) {
  let answer = 0;
  let arr = [];

  for (let i = 0; i < cities.length; i++) {
    let current = cities[i].toLowerCase();
    let findCity = arr.find((v) => v === current); 
    if (!findCity) {
      arr.push(current); 
      if (arr.length > cacheSize) {
        arr.shift();
      }
      answer += 5; 
    } else {
      arr = arr.filter((v) => v !== current);
      arr.push(current); 
      answer++; 
    }
  }

  return answer;
}