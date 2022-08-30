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

const ceaserCipher = ((string) => {
    const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const checkString = (string) => {
        let placeHolder = [];
        for (let i = 0; i < string.length; i++) {
            placeHolder.push(characters.indexOf(string[i]))
        }
        return placeHolder;
    }

    const shiftNumbers = (arr) => {
        let shiftedArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 26) {
                shiftedArr.push(arr[i] = 0)
            } else {
                shiftedArr.push(arr[i] += 1)
            }
        }
        return shiftedArr;
    }

    const constructWord = (arr) => {
        let word = '';
        for (let i = 0; i < arr.length; i++) {
            word += characters[arr[i]];
        }
        return word;
    }

    return {
        checkString,
        shiftNumbers,
        constructWord,
    }
})();

export {
    capitalize,
    reverseString,
    calculator,
    ceaserCipher,
}