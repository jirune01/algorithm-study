function solution(my_string) {
    let arr = my_string.split('');
    
    const noOverlay = Array.from(new Set(arr));
    
    return noOverlay.join('')
  
}