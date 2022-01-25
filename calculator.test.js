
const calculator = require('./calculator');

const x = 13;
const y = 5;

const x2 = -3;
const y2 = -5;

const x3 = 8;
const y3 = -5;


test('Add numbers using the add method', () => {
    expect(calculator.add(x, y)).toBe(18)
});
test('Subtract numbers using the subtract method', () => {
    expect(calculator.subtract(x, y)).toBe(8)
});
test('Multiply numbers using the multiply method', () => {
    expect(calculator.multiply(x, y)).toBe(65)
});
test('Divide numbers using the divide method', () => {
    expect(calculator.divide(x, y)).toBe(2.6)
});
test('Find the remainder of dividing numbers using the modulo method', () => {
    expect(calculator.modulo(x, y)).toBe(3)
});


test('Testing negative numbers', () => {
        expect(calculator.add(x2, y2)).toBe(-8),
        expect(calculator.subtract(x2, y2)).toBe(2),
        expect(calculator.multiply(x2, y2)).toBe(15),
        expect(calculator.divide(x2, y2)).toBe(0.6),
        expect(calculator.modulo(x2, y2)).toBe(-3)
});

test('Testing negative and positive numbers', () => {
   
    expect(calculator.add(x3, y3)).toBe(3),
    expect(calculator.subtract(x3, y3)).toBe(13),
    expect(calculator.multiply(x3, y3)).toBe(-40),
    expect(calculator.divide(x3, y3)).toBe(-1.6),
    expect(calculator.modulo(x3, y3)).toBe(3)
});

