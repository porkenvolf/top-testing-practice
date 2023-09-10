/* An analyzeArray function that takes an array of numbers and returns
 an object with the following properties: average, min, max, and length. */

import analyzeArray from "../js/analyzeArray";

const expected = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
};
test("Output is correct", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual(expected);
});
test("Throws error when fed non-numbers inside the array", () => {
    expect(() => {
        analyzeArray(["q", 8, 3, 4, 2, 6]);
    }).toThrow("only include numbers");
});
test("Throws error when given a non-array", () => {
    expect(() => {
        analyzeArray("test");
    }).toThrow("not an array");
    expect(() => {
        analyzeArray(123);
    }).toThrow("not an array");
    expect(() => {
        analyzeArray({});
    }).toThrow("not an array");
});
test("Doesn't crash with an empty array", () => {
    expect(analyzeArray([])).toStrictEqual({
        average: undefined,
        min: undefined,
        max: undefined,
        length: 0,
    });
});
