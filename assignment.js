const capitalize = (string) => {
    const str = string.charAt(0).toUpperCase() + string.slice(1);

    return str;
};

const reverseString = (string) => {
    let str = "";
    for (let i = string.length - 1; i >= 0; i--) {
        str += string[i];
    };
    return str;
};

const calculator = {
    add: (a, b) => {
        return a + b;
    },
    subtract: (a, b) => {
        return a - b;
    },
    divide: (a, b) => {
        return a / b;
    },
    multiply: (a, b) => {
        return a * b;
    }
}

export {
    capitalize,
    reverseString,
    calculator,
}