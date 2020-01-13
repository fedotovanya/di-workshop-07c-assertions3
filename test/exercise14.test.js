var chai = require('chai');
var assert = chai.assert;

  suite('Unit Tests Exercise 14 - String include',function(){
      // 14 - #include (on #notInclude ) works for strings too !! 
      // It asserts that the actual string contains the expected substring
      test('Checking String Inclusion 1', function(){
        assert.include('Arrow', 'row', "Arrow contains row...");
      });
      test('Checking String Inclusion 2', function(){
        assert.notInclude('dart', 'queue', "But a dart doesn't contain a queue");
      });
    });
  

