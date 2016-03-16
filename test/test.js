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
            medida = new Kelvin();
            assert.notEqual(false, medida.check("Kelvin"));
            assert.notEqual(false, medida.check("Kel"));
            assert.notEqual(false, medida.check("K"));
            assert.notEqual(false, medida.check("k"));
            assert.notEqual(false, medida.check("kElVi"));
        });
    });
});
