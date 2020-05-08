QUnit.test("encrypt test", function (assert) {
    //            ABCDE
    const code = "DEACB";
    const cipherText = encrypt("BADE", code);
    const expectedCipherText = "EDCB";
    assert.equal(cipherText, expectedCipherText);
});

QUnit.test("decrypt test", function (assert) {
    //            ABCDE
    const code = "DEACB";
    const clearText = decrypt("EDCB", code);
    const expectedClearText = "BADE";
    assert.equal(clearText, expectedClearText);
});
