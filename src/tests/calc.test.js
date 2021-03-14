import { Calc } from '../index.js';

const calc = new Calc();

test("Soma deve retornar 2", () => {
    const result = calc.sum(1,1);
    expect(result).toEqual(2);
});

test("Multiplicação deve retornar 6", () => {
    const result = calc.multiply(3,1);
    expect(result).toEqual(6);
});