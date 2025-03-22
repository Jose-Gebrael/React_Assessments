findMissingNumber([1, 2, 4, 5, 6]);

function findMissingNumber(numberArray) {
    if (numberArray[0] !== 1) {
        console.log("Missing Number is 1");
        return 1;
    }

    let previousNumber = 1;
    for (let i = 1; i < numberArray.length; i++) {
        if (numberArray[i] !== previousNumber + 1) {
            let missingNumber = numberArray[i] - 1;
            console.log("Missing Number: " + missingNumber);
            return missingNumber;
        }
        previousNumber++;
    }
    console.log("No Missing Numbers!");
    return 0;
}