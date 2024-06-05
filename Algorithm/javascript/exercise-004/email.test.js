const validarEmail = require('./email');

test('Validar email válido: teste@example.com', () => {
    expect(validarEmail("teste@example.com")).toBe(true);
});

test('Validar email válido: user.name+tag+sorting@example.com', () => {
    expect(validarEmail("user.name+tag+sorting@example.com")).toBe(true);
});

test('Validar email inválido: plainaddress', () => {
    expect(validarEmail("plainaddress")).toBe(false);
});

test('Validar email inválido: @missingusername.com', () => {
    expect(validarEmail("@missingusername.com")).toBe(false);
});

test('Validar email inválido: username@.com', () => {
    expect(validarEmail("username@.com")).toBe(false);
});

test('Validar email inválido: username@com', () => {
    expect(validarEmail("username@com")).toBe(false);
});
