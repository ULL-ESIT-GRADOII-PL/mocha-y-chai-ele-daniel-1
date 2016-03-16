// var expect = require('chai').expect;

// require("../assets/js/temperatura").Celsius;

var assert = chai.assert;

describe('Regex', function() {
    describe('Celsius', function () {
        it('should match any substring of "Celsius"', function () {
            var medida = new Celsius();
            assert.notEqual(false, medida.check("Celsius"));
            assert.notEqual(false, medida.check("Celsi"));
            assert.notEqual(false, medida.check("Cel"));
            assert.notEqual(false, medida.check("C"));
        });
        
    });
});
