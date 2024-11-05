function removeCountryCode(inputString: string) {
    // Check if the input string starts with "90"
    if (inputString.startsWith("90")) {
        // Remove the first two characters ("90") and return the rest of the string
        return inputString.slice(2);
    } else {
        // If the input string doesn't start with "90," return the original string
        return inputString;
    }
}

export default removeCountryCode;