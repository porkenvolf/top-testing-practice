/* A capitalize function that takes a string and returns it with 
the first character capitalized.
 */

import capitalize from "../js/capitalize";

test("Capitalize first letter", () => {
    const string = "testing string";
    expect(capitalize(string)).toBe("Testing string");
});
test("Numeric chars unaffected", () => {
    const string = "12345";
    expect(capitalize(string)).toBe("12345");
});
test("Special chars unaffected", () => {
    const string = "!@#$%";
    expect(capitalize(string)).toBe("!@#$%");
});
test("Already uppercase unaffected", () => {
    const string = "TEST";
    expect(capitalize(string)).toBe("TEST");
});
test("Works with numbers", () => {
    const number = 1234;
    expect(capitalize(number)).toBe("1234");
});
