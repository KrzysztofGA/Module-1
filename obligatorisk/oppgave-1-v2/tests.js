// QUnit.test("Validation of the entire date", function (assert) {
//     function date(checkedDate, expected) {
//         assert.equal(isDateValid(checkedDate), expected);
//     }
//     date("31.05.2020", true);
// });
QUnit.test("Validation of the entire date", function (assert) {
    function date(checkedDate, expected) {
        assert.equal(isDateValid(checkedDate), expected);
    }
    date("01.01.0000", true);
    date("30.05.2020", true);
    date("12.12.1212", true);

    date("12.12.121", true);
    date("00.00.0000", true);
    date("99.99.9999", true);
    date("12-12.2020", true);
});
QUnit.test("Validation of the day", function (assert) {
    function date(checkedDate, expected) {
        assert.equal(isDateValid(checkedDate), expected);
    }
    date("31.05.2020", true);
    date("29.02.2020", true);

    date("31.11.2020", true);
    date("99.12.2020", true);
    date("29.02.2021", true);
    date("30.02.2020", true);
    date("s1.05.2020", true);
});
QUnit.test("Validation of the month", function (assert) {
    function date(checkedDate, expected) {
        assert.equal(isDateValid(checkedDate), expected);
    }
    date("12.12.1212", true);
    date("29.02.2020", true);

    date("31.s5.2020", true);
    date("31.1O.2020", true);
    date("12.99.9999", true);
});
QUnit.test("Validation of the year", function (assert) {
    function date(checkedDate, expected) {
        assert.equal(isDateValid(checkedDate), expected);
    }
    date("01.01.0000", true);
    date("01.01.9999", true);

    date("22.02.202a", true);
    date("12.01.a020", true);
});
QUnit.test("Validation of leap years and 29, 30, 31", function (assert) {
    function date(checkedDate, expected) {
        assert.equal(isDateValid(checkedDate), expected);
    }
    date("29.02.2020", true);
    date("29.02.0004", true);

    date("29.02.2001", true);
    date("30.02.2020", true);
    date("31.02.2020", true);
});
