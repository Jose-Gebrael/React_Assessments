reverseString("This String will be reversed!");

function reverseString(str) {
    // without consol.log:
    // return str.split("").reverse().join("");
    const reversedString = str.split("").reverse().join("");
    console.log(reversedString);
    return reversedString;
}