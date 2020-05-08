QUnit.test("teksten inneholder '@'", function (assert) {
    const actual = ePostAdresse1("krzysztof@getacademy.no");
    const expected = true;
    assert.equal(actual, expected);
});

QUnit.test("teksten inneholder ikke mellomrom", function (assert) {
    const actual = ePostAdresse2(" krzy sztof@ getacademy.no ");
    const expected = true;
    assert.equal(actual, expected);
});
QUnit.test("teksten skal inneholde et punktum før '@' og et punktum etter", function (assert) {
    const actual = ePostAdresse3("krzysztof.zygmunt@getacademy.no");
    const expected = true;
    assert.equal(actual, expected);
});
