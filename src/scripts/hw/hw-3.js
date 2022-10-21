export  function getMaxDigit(number) {
    let maxDigit = 0;
    let digitStr = number.toString();
    let digitArr = digitStr.split('');
    for (let i = 1; i < digitArr.length; i++) {
        if (maxDigit < +digitArr[i]) {
            maxDigit = digitArr[i];
        }
    }
    return maxDigit;
}
const maxDigit = getMaxDigit(1236);
console.log(maxDigit);