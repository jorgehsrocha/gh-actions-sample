import { Calc } from '../index.js';
describe('Verificando cálculos simples', () => {
    let calc;
    beforeAll(() => {
        console.log('Configurando calculador');
        calc = new Calc();
    })

    it("Soma deve retornar 2", () => {
        const result = calc.sum(1,1);
        expect(result).toEqual(2);
    });

    it("Multiplicação deve retornar 6", () => {
        const result = calc.multiply(3,1);
        expect(result).toEqual(6);
    });
});