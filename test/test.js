var assert = chai.assert;

describe('Regex', function() {
    describe('Celsius', function () {
        it('should match any substring of "Celsius"', function () {
            var medida = new Celsius();
            assert.notEqual(false, medida.check("Celsius"));
            assert.notEqual(false, medida.check("Celsi"));
            assert.notEqual(false, medida.check("Cel"));
            assert.notEqual(false, medida.check("C"));
            assert.notEqual(false, medida.check("c"));
            assert.notEqual(false, medida.check("cElSi"));

        });
    });

    describe('Kelvin', function () {
        it('should match any substring of "Kelvin"', function () {
            medida = new Kelvin();
            assert.notEqual(false, medida.check("Kelvin"));
            assert.notEqual(false, medida.check("Kel"));
            assert.notEqual(false, medida.check("K"));
            assert.notEqual(false, medida.check("k"));
            assert.notEqual(false, medida.check("kElVi"));
        });
    });

    describe('Fahrenheit', function () {
        it('should match any substring of "Fahrenheit"', function () {
            medida = new Fahrenheit();
            assert.notEqual(false, medida.check("Fah"));
            assert.notEqual(false, medida.check("F"));
            assert.notEqual(false, medida.check("Fahrenheit"));
            assert.notEqual(false, medida.check("Fahren"));
        });
    });
});

describe('Conversions', function() {
    describe('String Parameter', function () {
        var medida = new Celsius("0 c");
        it('String', function () {
            assert.equal(32, medida.toFahrenheit());
        });
    });
    describe('Testing convert', function () {
        var medida = Medida.convertir("0 c f");
        it('convert 0 c f', function () {
            assert.equal("32.00 toFahrenheit", medida);
        });
    });
    describe('Celsius', function () {
        var medid = new Celsius(0);
        it('toFahrenheit"', function () {
            assert.equal(32, medid.toFahrenheit());
        });

        it('toKelvin"', function () {
            assert.equal(273, medid.toKelvin());
        });
    });
    describe('Kelvin', function () {
        var medida = new Kelvin(273);
        it('toFahrenheit"', function () {
            assert.equal(32, medida.toFahrenheit());
        });

        it('toCelsius"', function () {
            assert.equal(0, medida.toCelsius());
        });
    });
    describe('Fahrenheit', function () {
        var medida = new Fahrenheit(32);
        it('toCelsius"', function () {
            assert.equal(0, medida.toCelsius());
        });

        it('toKelvin"', function () {
            assert.equal(273, medida.toKelvin());
        });
    });
});
