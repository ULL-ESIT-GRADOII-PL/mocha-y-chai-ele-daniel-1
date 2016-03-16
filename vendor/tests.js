var assert = chai.assert;

  var assert = require('assert');
  describe('Regex', function() {
    describe('Celsius', function () {
      it('should match any substring of "Celsius"', function () {
        var medida = Celsius(0);
        assert.equal(true, medida.check("Celsius"));
        assert.equal(true, medida.check("Celsi"));
        assert.equal(true, medida.check("Cel"));
        assert.equal(true, medida.check("C"));
      });
    });
  });
