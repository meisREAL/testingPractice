import { capitalize, reverseString, calculator } from './assignment'

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