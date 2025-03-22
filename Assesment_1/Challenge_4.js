firstNonRepeatingChar("swiss");
firstNonRepeatingChar("AA");

function firstNonRepeatingChar(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            console.log("Non Recurring character: " + str[i]);
            return str[i];
        }
    }
    console.log("All characters are recurring!");
    return null;
}
