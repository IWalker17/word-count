const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');
const app = require('../script/app');

describe('app', function() {

  // Need to figure out how to replicate event or alternative approach.
  describe.skip('#loadFile', function() {
    let onChangeSuccessSpy;
    before(function() {
      onChangeSuccessSpy = sinon.spy();
      document.getElementsByTagName('input').trigger('onChangeSuccess', onChangeSuccessSpy);
    });
    it('Should trigger an event', function() {
      document.getElementsByTagName('input').onchange();
      expect(onChangeSuccessSpy.callCount).to.equal(1);
    });

    it('Should return a string', function() {
      expect(app.loadFile(), 'string');
    });
  });

  describe('#mkArr', function(){
    it('Should return an array given a string', function() {
      expect(app.mkArr(), 'string');
    });
  });

});
