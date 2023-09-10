/* A reverseString function that takes a string and returns it reversed.
 */

import reverseString from "../js/reverseString";

test("Reverses string", () => {
    const string = "abcdefg";
    expect(reverseString(string)).toBe("gfedcba");
});
test("Works with numbers", () => {
    const number = 1234;
    expect(reverseString(number)).toBe("4321");
});
