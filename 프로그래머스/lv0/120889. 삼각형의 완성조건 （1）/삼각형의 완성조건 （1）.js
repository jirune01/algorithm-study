function solution(sides) {
    // 가장 큰변은 다른 두변의 합보다 작아야 한다 
    // 만들수 있으면 1 없으면 2

    let good = sides.sort((a,b)=> a-b)
    
    
if(good[2] > good[0] +good[1]  ||good[2] === good[0] +good[1] ) return 2
      else if(good[2] < good[0] +good[1] )  return 1
    

}