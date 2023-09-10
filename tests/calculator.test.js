/* A calculator object that contains functions for the basic
 operations: add, subtract, divide, and multiply. Each of these 
 functions should take two numbers and return the correct 
calculation. */

import Calculator from "../js/calculator";
test("works with  -10 < a and b < 10, all int", () => {
    for (let a = -10; a < 10; a++) {
        for (let b = -10; b < 10; b++) {
            expect(Calculator.add(a, b)).toBe(a + b);
            expect(Calculator.substract(a, b)).toBe(a - b);
            expect(Calculator.divide(a, b)).toBe(a / b);
            expect(Calculator.multiply(a, b)).toBe(a * b);
        }
    }
});
test("Works with numbers in string format", () => {
    const a = "1";
    const b = "2";

    expect(Calculator.add(a, b)).toBe(3);
    expect(Calculator.substract(a, b)).toBe(-1);
    expect(Calculator.divide(a, b)).toBe(0.5);
    expect(Calculator.multiply(a, b)).toBe(2);
});

test("Throws relevant errors when used with special chars", () => {
    const a = "#";
    const b = "%";
    expect(() => {
        Calculator.add(a, b);
    }).toThrow("values");
    expect(() => {
        Calculator.substract(a, b);
    }).toThrow("values");
    expect(() => {
        Calculator.divide(a, b);
    }).toThrow("values");
    expect(() => {
        Calculator.multiply(a, b);
    }).toThrow("values");
});
test("Throws relevant errors when used with non-number strings", () => {
    const a = "1dsa";
    const b = "2gd";
    expect(() => {
        Calculator.add(a, b);
    }).toThrow("values");
    expect(() => {
        Calculator.substract(a, b);
    }).toThrow("values");
    expect(() => {
        Calculator.divide(a, b);
    }).toThrow("values");
    expect(() => {
        Calculator.multiply(a, b);
    }).toThrow("values");
});
