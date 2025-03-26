function solution(phone_number) {
    const answer = '';
    const hideNumber = phone_number.length - 4;
    return "*".repeat(hideNumber) + phone_number.substring(hideNumber)
}