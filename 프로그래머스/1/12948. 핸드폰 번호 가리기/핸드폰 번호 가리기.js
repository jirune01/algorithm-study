function solution(phone_number) {
    const hideNumberLength = phone_number.length - 4;
    return "*".repeat(hideNumberLength) + phone_number.substring(hideNumberLength);                             
}