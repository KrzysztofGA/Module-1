let info, day, month, year;
function isDateValid(date) {
    if (!isValid.length(date)) {
        return info;
    } else if (!isValid.dot(date)) {
        return info;
    } else if (!isValid.year(date)) {
        return info;
    } else if (!isValid.month(date)) {
        return info;
    } else if (!isValid.day(date)) {
        return info;
    } else {
        return true;
    }
}

const isValid = {
    length: function (date) {
        let dateLength = date.length;
        if (dateLength == 10) {
            return true;
        } else {
            info = "Chceck the data length. There should be 10 characters.";
            return false;
        }
    },
    dot: function (date) {
        let positionThree = date[2];
        let positionSix = date[5];
        if (positionThree == "." && positionSix == ".") {
            return true;
        } else {
            info = "Correct dots. The correct date format DD.MM.YYYY";
            return false;
        }
    },
    year: function (date) {
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
            info = "The year field contains characters other than numbers.";
            return false;
        }
    },
    month: function (date) {
        let m = date.slice(3, 5);
        let d0 = parseInt(m[0]);
        let d1 = parseInt(m[1]);

        if (!isNaN(d0) && !isNaN(d1)) {
            if (m >= 1 && m <= 12) {
                month = m;
                return true;
            } else {
                info = "Correct the month. E.g. 01, 11. Interval 01-12.";
                return false;
            }
        } else {
            info = "The month field contains characters other than numbers.";
            return false;
        }
    },
    day: function (date) {
        let d = date.slice(0, 2);
        let d0 = parseInt(d[0]);
        let d1 = parseInt(d[1]);

        if (!isNaN(d0) && !isNaN(d1)) {
            if (d > 31) {
                info = "There are no more than 31 days in any month.";
                return false;
            } else if (d > 28 && month == "02" && !isValid.leapYear(year)) {
                info =
                    "February can have 29 days only in leap years, e.g. 2020. In all other cases, it has a maximum of 28 days.";
                return false;
            } else if (d == 31 && (month == "02" || month == "04" || month == "06" || month == "09" || month == "11")) {
                info = "Only January, March, May, July, August, October and December can have 31 days.";
                return false;
            } else if (d >= 1 && d <= 28 && month == "02") {
                day = d;
                return true;
            } else if (d == 29 && month == "02" && isValid.leapYear(year)) {
                day = d;
                return true;
            } else if (d >= 1 && d <= 30 && month != "02") {
                day = d;
                return true;
            } else if (
                d == 31 &&
                (month == "01" ||
                    month == "03" ||
                    month == "05" ||
                    month == "07" ||
                    month == "08" ||
                    month == "10" ||
                    month == "12")
            ) {
                day = d;
                return true;
            } else {
                info = "Correct the day. E.g. 01, 30. Check the number of days in a month. Interval 01-31.";
                return false;
            }
        } else {
            info = "The day field contains characters other than numbers.";
            return false;
        }
    },
    leapYear: function (year) {
        return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    },
};
