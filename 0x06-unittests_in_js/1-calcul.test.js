const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Tests advanced calculateNumber function:', () => {
  describe('Tests SUM function:', () => {
    it('Returns 6.', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });
  describe('Tests SUBTRACT function:', () => {
    it('Returns -4.', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });
  describe('Tests DIVIDE function:', () => {
    it('Returns 0.2.', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
  });
  describe('Tests DIVIDE function W 0:', () => {
    it("Returns 'Error'.", () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
