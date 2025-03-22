countVowels("javascript");

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let vowelCounter = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelCounter++;
        }
    }
    console.log(vowelCounter);
    return vowelCounter;
}