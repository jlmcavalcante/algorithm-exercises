const SomosiCEV = require('./somosicev');

test('Verificar se 3 retorna "Somos"', () => {
    expect(SomosiCEV(3)).toBe("Somos");
});

test('Verificar se 9 retorna "Somos"', () => {
    expect(SomosiCEV(9)).toBe("Somos");
});

test('Verificar se 5 retorna "iCEV"', () => {
    expect(SomosiCEV(5)).toBe("iCEV");
});

test('Verificar se 20 retorna "iCEV"', () => {
    expect(SomosiCEV(20)).toBe("iCEV");
});

test('Verificar se 15 retorna "SomosiCEV"', () => {
    expect(SomosiCEV(15)).toBe("SomosiCEV");
});

test('Verificar se 30 retorna "SomosiCEV"', () => {
    expect(SomosiCEV(30)).toBe("SomosiCEV");
});

test('Verificar se 2 retorna 2', () => {
    expect(SomosiCEV(2)).toBe(2);
});

test('Verificar se 8 retorna 8', () => {
    expect(SomosiCEV(8)).toBe(8);
});
