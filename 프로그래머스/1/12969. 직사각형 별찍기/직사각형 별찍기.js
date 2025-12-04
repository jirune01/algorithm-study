process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const dataArr = data.split(" ");
  const first = Number(dataArr[0]);
  const second = Number(dataArr[1]);
    

  for (let i = 0; i < second; i++) {
    let stat = "";
    for (let j = 0; j < first; j++) {
      stat += "*";
    }
    console.log(stat)
  }

});