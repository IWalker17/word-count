const assert = require('chai').assert;
const expect = require('chai').expect;
const app = require('../src/app');

describe('app', function() {

    describe('#mkArr', function(){
        it('Should return an array given a string', function() {
            let str = 'i spy with my eye';
            expect(app.mkArr(str)).to.be.an('array');
        });

        it('Should return an array of words', function() {
            let str = 'I like fishing';
            assert.equal(app.mkArr(str).indexOf('like'), 1);
        });
    });

    describe('#wordFreq', function() {
        it('Should return and object give an array', function() {
            let arr = ['hi', 'hi', 'hi', 'the', 'the', 'the', 'red', 'green', 'yellow', 'yellow'];
            expect(app.wordFreq(arr)).to.be.an('object');
        });

        it('Should return { word: num of occurances }', function() {
            let arr = ['one', 'one', 'one', 'three', 'three', 'three', 'three', 'is', 'is', 'is', 'a', 'cat', 'dog', 'dog'];
            assert.isObject(app.wordFreq(arr), '{ one: 3, three: 4, is: 3, a: 1 }');
        });
    });

    describe('#noDups', function() {
        it('Should return an array of non duplicate words', function() {
            let arr = ['ok', 'ok', 'ok', 'dice', 'dice', 'is', 'is', 'at', 'red', 'red', 'red', 'red'];
            assert.equal(app.noDups(arr).indexOf('ok'), 0);
            assert.equal(app.noDups(arr).indexOf('dice'), 1);
            assert.equal(app.noDups(arr).indexOf('is'), 2);
            assert.equal(app.noDups(arr).indexOf('at'), 3);
            assert.equal(app.noDups(arr).indexOf('red'), 4);
        });
    });

    describe('#descSort', function() {
        it('Should return an array that is sorted in descending order', function() {
            let arr = [12, 432, 23, 54, 25, 1, 8];
            assert.equal(app.descSort(arr).indexOf(432), 0);
        });
    });
});
