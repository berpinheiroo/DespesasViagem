const index = require('./index.js')

test('Testar rendimento do combustivel', () => {
    expect(index.calcularGastoCombustivel(20000, 'etanol')).toBe(1.82);
});

test('Testar numero de paradas', () => {
    expect(index.calcularNumeroParadas(["adulto", "crianca", "crianca"], 4.0)).toBe(6);
});
test('Testar gasto com as refeicoes', () => {
    expect(index.calcularValorRefeicoes(4, ["adulto", "crianca", "crianca"])).toBe(340);
});