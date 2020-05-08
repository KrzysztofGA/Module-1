// function encrypt(inputText, code) {
//     if (inputText == '') return ''
//     const firstLetter = inputText.charAt(0);
//     const index = 'ABCDE'.indexOf(firstLetter);
//     const outputTextOfFirstLetter = code.charAt(index);
//     return outputTextOfFirstLetter + encrypt(inputText.substr(1), code);
// }

// function decrypt(inputText, code) {
//     if (inputText == '') return '';
//     const firstLetter = inputText.charAt(0);
//     const index = code.indexOf(firstLetter);
//     const outputTextOfFirstLetter = 'ABCDE'.charAt(index);
//     return outputTextOfFirstLetter + decrypt(inputText.substr(1), code);
// }

function encrypt(inputText, code) {
    return crypt(inputText, code, false);
}

function decrypt(inputText, code) {
    return crypt(inputText, code, true);
}

function crypt(inputText, code, findIndexInCode) {
    if (inputText == "") return "";
    const firstLetter = inputText.charAt(0);
    const index = (findIndexInCode ? code : "ABCDE").indexOf(firstLetter);
    const outputTextOfFirstLetter = (findIndexInCode ? "ABCDE" : code).charAt(index);
    return outputTextOfFirstLetter + crypt(inputText.substr(1), code, findIndexInCode);
}
