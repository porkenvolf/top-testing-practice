export default function caesarCipher(string = "", shift = 0) {
    const abc = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    const array = string.toLowerCase().split("");
    let output = "";

    for (const char of array) {
        let tempChar = char;

        if (abc.includes(char)) {
            const index =
                abc.lastIndexOf(char) + shift < abc.length
                    ? abc.lastIndexOf(char) + shift
                    : shift - 1;

            tempChar = abc[index];
        }
        output += tempChar;
    }
    return output;
}
