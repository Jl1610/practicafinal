const saludo = require('./app');

test('saludo devuelve "Hola Mundo"', () => {
    expect(saludo()).toBe('Hola Mundo');
});
