function solution(phone_number) {
    var answer = '';
    // 뒷 자리 4개 제외한 번호들 
     const len = phone_number.length - 4;
    // 앞자리 * 표시 하고 뒷 4자리를...
    return "*".repeat(len) + phone_number.substring(len)
}