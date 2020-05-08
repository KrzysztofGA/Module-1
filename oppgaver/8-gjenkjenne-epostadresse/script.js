// teksten inneholder '@'
function ePostAdresse1(text) {
    if (!text.indexOf("@")) return false;
    return true;
}

// teksten inneholder ikke mellomrom
// https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
function ePostAdresse2(text) {
    const t = text.replace(/\s+/g, "");
    if (t.indexOf(" ") != -1) return false;
    return true;
}

// teksten skal inneholde et punktum før '@' og et punktum etter
function ePostAdresse3(text) {
    const i = text.indexOf("@");
    const t1 = text.slice(0, i);
    console.log(t1);
    console.log(t1[t1.length - 1]);
    const t2 = text.slice(i + 1);
    console.log(t2);
    if (
        t1.indexOf(".") == -1 ||
        t2.indexOf(".") == -1 ||
        t1[0] == "." ||
        t1[t1.length - 1] == "." ||
        t2[0] == "." ||
        t2[t2.length - 1] == "."
    )
        return false;
    return true;
}
