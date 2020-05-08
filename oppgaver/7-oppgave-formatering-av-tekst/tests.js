QUnit.test("fix - 'terje'", function (assert) {
    const actual = fixText("terje");
    const expected = "Terje";
    assert.equal(actual, expected);
});

QUnit.test("fix - 'terje '", function (assert) {
    const actual = fixText("terje ");
    const expected = "Terje";
    assert.equal(actual, expected);
});

QUnit.test("fix - ' terje'", function (assert) {
    const actual = fixText(" terje");
    const expected = "Terje";
    assert.equal(actual, expected);
});

QUnit.test("fix - ' terje '", function (assert) {
    const actual = fixText(" terje ");
    const expected = "Terje";
    assert.equal(actual, expected);
});

QUnit.test("alle andre tegn enn det første er i små bokstaver", function (assert) {
    const actual = fixText("tERJE");
    const expected = "Terje";
    assert.equal(actual, expected);
});
