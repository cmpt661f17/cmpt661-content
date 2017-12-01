class Calculator {
    add(x, y) {
        return x + y
    }

    subtract(x, y) {
        return x - y
    }

    multiply(x, y) {
        return x * y
    }

    divide(x, y) {
        if (y === 0) {
            return 0
        } else {
            return x / y
        }
    }

}

module.exports = new Calculator();
