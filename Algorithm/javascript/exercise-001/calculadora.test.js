const calculadora = require('./calculadora');

test('Soma de 2 e 3 deve ser 5', () => {
    expect(calculadora(2, 3, '+')).toBe(5);
});

test('Subtração de 5 e 3 deve ser 2', () => {
    expect(calculadora(5, 3, '-')).toBe(2);
});

test('Multiplicação de 4 e 3 deve ser 12', () => {
    expect(calculadora(4, 3, '*')).toBe(12);
});

test('Divisão de 9 e 3 deve ser 3', () => {
    expect(calculadora(9, 3, '/')).toBe(3);
});

test('Operação inválida deve lançar erro', () => {
    expect(() => {
        calculadora(9, 3, '%');
    }).toThrow("Operação inválida!");
});
