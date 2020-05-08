QUnit.test("hello test", function (assert) {
    assert.ok(1 == "1", "Passed!");
    assert.ok(true, "true succeeds");
    assert.ok("non-empty", "non-empty string succeeds");

    assert.ok(false, "false fails");
    assert.ok(0, "0 fails");
    assert.ok(NaN, "NaN fails");
    assert.ok("", "empty string fails");
    assert.ok(null, "null fails");
    assert.ok(undefined, "undefined fails");
});
