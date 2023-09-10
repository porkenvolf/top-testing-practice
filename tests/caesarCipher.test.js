/* A caesarCipher function that takes a string and a shift factor
 and returns it with each character “shifted”. */

import caesarCipher from "../js/caesarCipher";

test("shift = 0 returns same string", () => {
    const string = "abcdefg";
    expect(caesarCipher(string, 0)).toBe(string);
});
test("shift = 1 works properly", () => {
    const string = "abcdefg";
    expect(caesarCipher(string, 1)).toBe("bcdefgh");
});
test("works with the last letter of abc and shift > 0", () => {
    const string = "zzzz";
    expect(caesarCipher(string, 1)).toBe("aaaa");
});
test("special chars are immune to change", () => {
    const string = "!@#";
    expect(caesarCipher(string, 1)).toBe("!@#");
});
test("works with uppercase too", () => {
    const string = "ZZZZ";
    expect(caesarCipher(string, 1)).toBe("aaaa");
});
