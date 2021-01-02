export const convertToPersian = value =>{
    let englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];
    for (let i = 0, numbersLen = persianNumbers.length; i < numbersLen; i++) {
        value = value.replace(new RegExp(englishNumbers[i], "g"), persianNumbers[i]);
    }
    return value;
}
