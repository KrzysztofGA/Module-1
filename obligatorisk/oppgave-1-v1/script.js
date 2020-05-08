let info = "Enter the date",
    day = "00",
    month = "00",
    year = "0000";

function isDateValid(enteredDate) {
    let date = enteredDate.value;

    if (!isLengthValid(date)) {
        info = "Chceck the data length";
    } else if (!dotPosition(date)) {
        info = "Correct dots. The correct date format DD.MM.YYYY";
    } else if (!isYearValid(date)) {
        info = "Correct the year. E.g. 0012, 2010. Interval 0000-9999.";
        year = "0000";
    } else if (!isMonthValid(date)) {
        info = "Correct the month. E.g. 01, 11. Interval 01-12.";
        month = "00";
    } else if (!isDayValid(date)) {
        info = "Correct the day. E.g. 01, 30. Check the number of days in a month. Interval 01-31.";
        day = "00";
    } else {
        info = "Date is valid";
    }
    showDate();
}

function isLengthValid(date) {
    let dateLength = date.length;
    if (dateLength == 10) {
        return true;
    } else {
        return false;
    }
}

function dotPosition(date) {
    let positionThree = date[2];
    let positionSix = date[5];
    if (positionThree == "." && positionSix == ".") {
        return true;
    } else {
        return false;
    }
}

function isYearValid(date) {
    //after this I'm sure I have just 4 characters because I previously checked
    //is string is the right length equal 10 characters, this condition is not necessary
    //in my opinion (year.length === 4) && (year >= "0000")&& year <= "9999")
    //it is not possible to have a year outside the range 0000-9999
    //but it looks like the year is not protected form e.g. e234 or 201O
    let y = date.slice(6);
    let d0 = parseInt(y[0]);
    let d1 = parseInt(y[1]);
    let d2 = parseInt(y[2]);
    let d3 = parseInt(y[3]);

    //it's checked it is number but string is assigned to year
    //this solusion allows year like 0012
    if (!isNaN(d0) && !isNaN(d1) && !isNaN(d2) && !isNaN(d3)) {
        year = y;
        return true;
    } else {
        return false;
    }
}

function isMonthValid(date) {
    let m = date.slice(3, 5);
    let d0 = parseInt(m[0]);
    let d1 = parseInt(m[1]);

    if (!isNaN(d0) && !isNaN(d1) && m >= 1 && m <= 12) {
        month = m;
        return true;
    } else {
        return false;
    }
}

function isDayValid(date) {
    let d = date.slice(0, 2);
    let d0 = parseInt(d[0]);
    let d1 = parseInt(d[1]);

    if (!isNaN(d0) && !isNaN(d1)) {
        if (d > 31) {
            return false;
        } else if (d >= 1 && d <= 28 && month === "02") {
            day = d;
            return true;
        } else if (d == 29 && month === "02" && isLeapYear(year)) {
            day = d;
            return true;
        } else if (d >= 1 && d <= 30 && month !== "02") {
            day = d;
            return true;
        } else if (
            d == 31 &&
            (month === "01" ||
                month === "03" ||
                month === "05" ||
                month === "07" ||
                month === "08" ||
                month === "10" ||
                month === "12")
        ) {
            day = d;
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function showDate() {
    document.getElementById("info").innerHTML = info;
    document.getElementById("day").innerHTML = day;
    document.getElementById("month").innerHTML = month;
    document.getElementById("year").innerHTML = year;
}
