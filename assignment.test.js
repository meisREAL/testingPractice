import { capitalize, reverseString, calculator, ceaserCipher } from './assignment'

test('capitalize first character', () => {
    expect(capitalize('jurgis')).toBe('Jurgis');
});

test('reverse string', () => {
    expect(reverseString('jurgis')).toBe('sigruj');
});

test('Calculator add', () => {
    expect(calculator.add(2, 6)).toBe(8);
});
test('Calculator subtract', () => {
    expect(calculator.subtract(10, 2)).toBe(8);
});
test('Calculator divide', () => {
    expect(calculator.divide(12, 2)).toBe(6);
});
test('Calculator multiply', () => {
    expect(calculator.multiply(3, 8)).toBe(24);
});


test('ceaseCipher string places', () => {
    expect(ceaserCipher.checkString('mama')).toStrictEqual([12, 0, 12, 0]);
});
test('ceaserCipher shift arr numbers by 1', () => {
    expect(ceaserCipher.shiftNumbers([11, 9, 7, 14, 26])).toStrictEqual([12, 10, 8, 15, 0])
});
test('ceaserCipher constructing word', () => {
    expect(ceaserCipher.constructWord([12, 0, 12, 0])).toBe('mama');
})