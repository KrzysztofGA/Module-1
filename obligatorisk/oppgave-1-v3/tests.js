// @ts-nocheck
function dateOk(checkedDate, expected, assert) {
    const validation = isDateValid(checkedDate);
    assert.equal(validation, expected);
}
function dateNotOk(checkedDate, expected, assert) {
    const validation = isDateValid(checkedDate);
    assert.equal(validation.value, expected);
    assert.notOk(validation.value, validation.info);
}
QUnit.test('Validation of the entire date', function (assert) {
    dateOk('01.01.0000', true, assert);
    dateOk('30.05.2020', true, assert);
    dateOk('12.12.1212', true, assert);

    dateNotOk('12.12.121', false, assert);
    dateNotOk('00.00.0000', false, assert);
    dateNotOk('99.99.9999', false, assert);
    dateNotOk('12-12.2020', false, assert);
});
QUnit.test('Validation of the day', function (assert) {
    dateOk('31.05.2020', true, assert);
    dateOk('29.02.2020', true, assert);

    dateNotOk('31.11.2020', false, assert);
    dateNotOk('99.12.2020', false, assert);
    dateNotOk('29.02.2021', false, assert);
    dateNotOk('30.02.2020', false, assert);
    dateNotOk('s1.05.2020', false, assert);
});
QUnit.test('Validation of the month', function (assert) {
    dateOk('12.12.1212', true, assert);
    dateOk('29.02.2020', true, assert);

    dateNotOk('31.s5.2020', false, assert);
    dateNotOk('31.1O.2020', false, assert);
    dateNotOk('12.99.9999', false, assert);
});
QUnit.test('Validation of the year', function (assert) {
    dateOk('01.01.0000', true, assert);
    dateOk('01.01.9999', true, assert);

    dateNotOk('22.02.202a', false, assert);
    dateNotOk('12.01.a020', false, assert);
});
QUnit.test('Validation of leap years and 29, 30, 31', function (assert) {
    dateOk('29.02.2020', true, assert);
    dateOk('29.02.0004', true, assert);

    dateNotOk('29.02.2001', false, assert);
    dateNotOk('30.02.2020', false, assert);
    dateNotOk('31.02.2020', false, assert);
});
