function solution(priorities, location) {

    let count = 0
    
    while(1) {
        const v = priorities.shift()
        
        if (priorities.some(el => v<el)){
            priorities.push(v)
            location = location-1 < 0 ? priorities.length-1 : location - 1 
            continue
        }
        
        count++
        if (location===0) return count
        location = location-1 < 0 ? priorities.length-1 : location - 1 
        
    }
}