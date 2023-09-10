export default function reverseString(input = "") {
    const array = input.toString().split("").reverse();
    let output = "";

    for (const char of array) {
        output += char.toString();
    }
    return output;
}
