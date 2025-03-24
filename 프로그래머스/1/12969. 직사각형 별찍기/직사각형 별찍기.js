process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let i = 0; i < b; i++) {
    let stat1 = "";
    // b가 길이
    for (let j = 0; j < a; j++) {
      //a 한줄에 갯수
      stat1 += "*";
       
    }
    console.log(stat1)
  }

});