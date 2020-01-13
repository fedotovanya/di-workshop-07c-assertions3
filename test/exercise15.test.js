var chai = require('chai');
var assert = chai.assert;

var formatPeople = function(name, age) {
return '# name: ' + name + ', age: ' + age + '\n';
};

    suite('Unit Tests Exercise 15 - Approximation',function(){
      // 15 - #match Asserts that the actual value 
      // matches the second argument regular expression.
      test('#match, #notMatch', function() {
        var regex =  /^#\sname\:\s[\w\s]+,\sage\:\s\d+\s?$/;
        assert.match(formatPeople('John Doe', 35), regex);
      });
      test('#match, #notMatch', function() {
        var regex =  /^#\sname\:\s[\w\s]+,\sage\:\s\d+\s?$/;
        assert.notMatch(formatPeople('Paul Smith III', 'twenty-four'), regex);
      });
    })

