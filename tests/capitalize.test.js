import capitalize from "../js/capitalize";

test("Capitalize first letter", () => {
    const string = "testing string";
    expect(capitalize(string)).toBe("Testing string");
});
