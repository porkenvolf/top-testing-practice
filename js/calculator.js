export default class Calculator {
    static add(a, b) {
        this.typeCheck(a, b);
        return Number(a) + Number(b);
    }
    static substract(a, b) {
        this.typeCheck(a, b);

        return a - b;
    }
    static divide(a, b) {
        this.typeCheck(a, b);

        return a / b;
    }
    static multiply(a, b) {
        this.typeCheck(a, b);

        return a * b;
    }
    static typeCheck(a, b) {
        if (isNaN(a) || isNaN(b))
            throw new Error("Please check that your values are proper numbers");
    }
}
