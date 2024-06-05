const converterTemperatura = require('./temperatura');

test('Converter 0 Celsius para Fahrenheit', () => {
    expect(converterTemperatura(0, 'C')).toBe(32);
});

test('Converter 100 Celsius para Fahrenheit', () => {
    expect(converterTemperatura(100, 'C')).toBe(212);
});

test('Converter 32 Fahrenheit para Celsius', () => {
    expect(converterTemperatura(32, 'F')).toBeCloseTo(0);
});

test('Converter 212 Fahrenheit para Celsius', () => {
    expect(converterTemperatura(212, 'F')).toBeCloseTo(100);
});

test('Escala inválida deve lançar erro', () => {
    expect(() => {
        converterTemperatura(100, 'X');
    }).toThrow("Escala inválida! Use 'C' para Celsius ou 'F' para Fahrenheit.");
});
