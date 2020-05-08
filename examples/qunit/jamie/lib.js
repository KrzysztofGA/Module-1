//When using this way of running functions it checks that all is acceptable before going and defining if the result is true or false.

function isThisOk(date) {
    return (
        isDateLengthOk(date) &&
        isDotInThirdAndSeventhPlace(date) &&
        isYearAbove0000(date) &&
        isMonthBetween01And12(date) &&
        isDayBetween01And28(date)
    );
}

//Teksten må ha lengde 10.
function isDateLengthOk(date) {
    return date.length === 10;
}

//Det må være punktum i tredje posisjon og i sjette posisjon.
function isDotInThirdAndSeventhPlace(date) {
    return date[2] == "." && date[5] == ".";
}

//År er 0000 eller større. Kan sjekkes med year.length === 4 && year >= '0000' && year <= '9999'
function isYearAbove0000(date) {
    var year = date.substring(6, 10);
    return year.length === 4 && year >= "0000" && year <= "9999";
}

//Måned er fra og med 01 til og med 12. Kan sjekkes som over.
function isMonthBetween01And12(date) {
    var month = date.substring(3, 5);
    return month >= "01" && month <= "12";
}

//Dag er fra og med 01 til og med 28
function isDayBetween01And28(date) {
    var day = date.substring(0, 2);
    return day >= "01" && day <= "28";
}

//29 er lov for februar hvis det er skuddår.
//30 er lov for alle måneder utenom februar
//31 er lovlig for januar, mars, mai, juli, august, oktober og desember
function monthChecks(date) {
    var day = date.substring(0, 2);
    var month = date.substring(3, 5);
    var year = date.substring(6, 10);
    var isFebruary = month == "02";
    var isShortMonth = month == "04" || month == "06" || month == "09" || month == "11";
    var isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    return (
        (day >= "01" && day <= "28") ||
        (day == "29" && (!isFebruary || isLeapYear)) ||
        (day == "30" && !isFebruary) ||
        (day == "31" && !isFebruary && !isShortMonth)
    );
}
