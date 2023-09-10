export default function analyzeArray(input) {
    if (!Array.isArray(input)) throw new Error("Input is not an array");
    for (const item of input) {
        if (isNaN(item)) throw new Error("Array must only include numbers");
    }

    const average =
        input.length > 0
            ? input.reduce((a, b) => a + b, 0) / input.length
            : undefined;
    const min = input.reduce((a, b) => Math.min(a, b), input[0]);
    const max = input.reduce((a, b) => Math.max(a, b), input[0]);
    const length = input.length;

    return { average, min, max, length };
}
