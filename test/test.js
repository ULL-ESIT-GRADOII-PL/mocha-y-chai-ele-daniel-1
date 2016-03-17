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
            var medida = new Kelvin();
            assert.notEqual(false, medida.check("Kelvin"));
            assert.notEqual(false, medida.check("Kel"));
            assert.notEqual(false, medida.check("K"));
            assert.notEqual(false, medida.check("k"));
            assert.notEqual(false, medida.check("kElVi"));
        });
    });

    describe('Fahrenheit', function () {
        it('should match any substring of "Fahrenheit"', function () {
            var medida = new Fahrenheit();
            assert.notEqual(false, medida.check("Fah"));
            assert.notEqual(false, medida.check("F"));
            assert.notEqual(false, medida.check("Fahrenheit"));
            assert.notEqual(false, medida.check("Fahren"));
        });
    });

    describe('Testing convertir', function () {
        it('convert 0 c f', function () {
            assert.equal("32.00 toFahrenheit", Medida.convertir("0 c f"));
        });

        it('Should fail, bad typing celsius', function () {
            assert.equal('Desconozco como convertir desde "clsius" hasta "f"', Medida.convertir("0 clsius f"));
        });

        it('Should fail bad input, not follow the format set', function () {
            assert.equal('Introduzca una temperatura valida: 330e-1 F to C', Medida.convertir("f 0 c"));
        });
    });
});

// describe('HTML testing', function() {
//     var sandbox;

//     beforeEach(function() {
//         // create a sandbox
//         sandbox = sinon.sandbox.create();

//         // stub some console methods
//         sandbox.stub(document.getElementById, "log");
//     });

//     it('', function () {
        
//     })
// });

describe('Conversions', function() {
    describe('Celsius', function () {
        it('toFahrenheit"', function () {
            assert.equal(32, new Celsius(0).toFahrenheit());
        });

        it('toKelvin"', function () {
            assert.equal(273, new Celsius(0).toKelvin());
        });

        it('toCelsius"', function () {
            assert.equal(0, new Celsius(0).toCelsius());
        });
    });
    describe('Kelvin', function () {
        it('toFahrenheit"', function () {
            assert.equal(32, new Kelvin(273).toFahrenheit());
        });

        it('toCelsius"', function () {
            assert.equal(0, new Kelvin(273).toCelsius());
        });

        it('toKelvin"', function () {
            assert.equal(273, new Kelvin(273).toKelvin());
        });

    });
    describe('Fahrenheit', function () {
        var medida = new Fahrenheit(32);
        it('toFahrenheit"', function () {
            assert.equal(32, new Fahrenheit(32).toFahrenheit());
        });

        it('toCelsius"', function () {
            assert.equal(0, new Fahrenheit(32).toCelsius());
        });

        it('toKelvin"', function () {
            assert.equal(273, new Fahrenheit(32).toKelvin());
        });
    });
});
