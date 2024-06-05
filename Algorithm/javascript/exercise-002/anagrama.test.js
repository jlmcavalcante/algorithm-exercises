const saoAnagramas = require('./anagrama');

test('Verificar se "amor" e "roma" são anagramas', () => {
    expect(saoAnagramas("amor", "roma")).toBe(true);
});

test('Verificar se "Amor" e "Roma" são anagramas (case-insensitive)', () => {
    expect(saoAnagramas("Amor", "Roma")).toBe(true);
});

test('Verificar se "amor" e "romaa" não são anagramas', () => {
    expect(saoAnagramas("amor", "romaa")).toBe(false);
});

test('Verificar se "amor" e "casa" não são anagramas', () => {
    expect(saoAnagramas("amor", "casa")).toBe(false);
});

test('Verificar se strings vazias são anagramas', () => {
    expect(saoAnagramas("", "")).toBe(true);
});
