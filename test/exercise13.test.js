var chai = require('chai');
var assert = chai.assert;

    suite('Unit Tests Exercise 13 - Strings',function(){
      // 13 - #isString asserts that the actual value is a string.
      test('Are floating numbers strings?', function(){
        assert.fail(Math.sin(Math.PI/4), 'a float is not a string');
      });
      test('Are Environment Variables strings?', function(){
        assert.fail(process.env.PATH, 'env vars are strings (or undefined)');
      });
      test('Are JSONs strings?', function(){
        assert.fail(JSON.stringify({type: 'object'}), 'a JSON is a string');
      });      
    });
  