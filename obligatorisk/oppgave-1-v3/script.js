const lengthError = 'Chceck the data length. There should be 10 characters.';
const dotError = 'Correct dots. The correct date format DD.MM.YYYY';
const yearError = 'The year field contains characters other than numbers.';
const monthErrorInterval = 'Correct the month. E.g. 01, 11. Interval 01-12.';
const monthErrorCharacters =
    'The month field contains characters other than numbers.';
const dayErrorMore31 = 'There are no more than 31 days in any month.';
const dayErrorFebruary29 =
    'February can have 29 days only in leap years, e.g. 2020. In all other cases, it has a maximum of 28 days.';
const dayErrorLength31 =
    'Only January, March, May, July, August, October and December can have 31 days.';
const dayErrorValue =
    'Correct the day. E.g. 01, 30. Check the number of days in a month. Interval 01-31.';
const dayErrorCharacters =
    'The day field contains characters other than numbers.';

function isDateValid(date) {
    for (let i in isValid) {
        const isValidFunction = isValid[i];
        const validation = isValidFunction(date, checkedDateValue);
        if (!validation.value) {
            return validation;
        }
    }
    return true;
}

const checkedDateValue = {
    day: '',
    month: '',
    year: '',
    value: '',
    info: '',
};

const isValid = {
    length: function (date, checkedDate) {
        let dateLength = date.length;
        if (dateLength == 10) {
            checkedDate.value = true;
        } else {
            checkedDate.value = false;
            checkedDate.info = lengthError;
        }
        return checkedDate;
    },
    dot: function (date, checkedDate) {
        let positionThree = date[2];
        let positionSix = date[5];
        if (positionThree == '.' && positionSix == '.') {
            checkedDate.value = true;
        } else {
            checkedDate.value = false;
            checkedDate.info = dotError;
        }
        return checkedDate;
    },
    year: function (date, checkedDate) {
        let y = date.slice(6);
        let d0 = parseInt(y[0]);
        let d1 = parseInt(y[1]);
        let d2 = parseInt(y[2]);
        let d3 = parseInt(y[3]);
        if (!isNaN(d0) && !isNaN(d1) && !isNaN(d2) && !isNaN(d3)) {
            checkedDate.year = y;
            checkedDate.value = true;
        } else {
            checkedDate.value = false;
            checkedDate.info = yearError;
        }
        return checkedDate;
    },
    month: function (date, checkedDate) {
        let m = date.slice(3, 5);
        let d0 = parseInt(m[0]);
        let d1 = parseInt(m[1]);

        if (!isNaN(d0) && !isNaN(d1)) {
            if (m >= 1 && m <= 12) {
                checkedDate.month = m;
                checkedDate.value = true;
            } else {
                checkedDate.value = false;
                checkedDate.info = monthErrorInterval;
            }
        } else {
            checkedDate.value = false;
            checkedDate.info = monthErrorCharacters;
        }
        return checkedDate;
    },
    day: function (date, checkedDate) {
        let d = date.slice(0, 2);
        let d0 = parseInt(d[0]);
        let d1 = parseInt(d[1]);

        if (!isNaN(d0) && !isNaN(d1)) {
            if (d > 31) {
                checkedDate.value = false;
                checkedDate.info = dayErrorMore31;
            } else if (
                d > 28 &&
                checkedDate.month == '02' &&
                !leapYear(checkedDate.year)
            ) {
                checkedDate.value = false;
                checkedDate.info = dayErrorFebruary29;
            } else if (
                d == 31 &&
                (checkedDate.month == '02' ||
                    checkedDate.month == '04' ||
                    checkedDate.month == '06' ||
                    checkedDate.month == '09' ||
                    checkedDate.month == '11')
            ) {
                checkedDate.value = false;
                checkedDate.info = dayErrorLength31;
            } else if (d >= 1 && d <= 28 && checkedDate.month == '02') {
                checkedDate.day = d;
                checkedDate.value = true;
            } else if (
                d == 29 &&
                checkedDate.month == '02' &&
                leapYear(checkedDate.year)
            ) {
                checkedDate.day = d;
                checkedDate.value = true;
            } else if (d >= 1 && d <= 30 && checkedDate.month != '02') {
                checkedDate.day = d;
                checkedDate.value = true;
            } else if (
                d == 31 &&
                (checkedDate.month == '01' ||
                    checkedDate.month == '03' ||
                    checkedDate.month == '05' ||
                    checkedDate.month == '07' ||
                    checkedDate.month == '08' ||
                    checkedDate.month == '10' ||
                    checkedDate.month == '12')
            ) {
                checkedDate.day = d;
                checkedDate.value = true;
            } else {
                checkedDate.value = false;
                checkedDate.info = dayErrorValue;
            }
        } else {
            checkedDate.value = false;
            checkedDate.info = dayErrorCharacters;
        }
        return checkedDate;
    },
};

function leapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
