var chai = require('chai');
var assert = chai.assert;

// These variables are used in the tests. Don't Edit them.
var Car = function() {
  this.model = 'cedan';
  this.engines = 1;
  this.wheels = 4;
};

var Plane = function() {
  this.model = '737';
  this.engines = ['left', 'right'];
  this.wheels = 6;
  this.wings = 2;
};

var myCar = new Car();
var airlinePlane = new Plane();

/** Delete this line and the one at the bottom when you're ready for exercise 18
 
    suite('Unit Tests Exercise 11 - Array Identitiy',function(){
      // 18 #instanceOf asserts that an object is an instance of a constructor 
      // Use #instanceOf or #notInstanceOf where appropriate
      test('is myCar an instance of Plane?', function() {
        assert.fail(myCar, Plane);
        });
      test('is airlinePlane an object?', function() {  
        assert.fail(airlinePlane, Object, 'everything is an Object');
        });
      test('is airlinePlane an instance of Plane?', function() {
        assert.fail(airlinePlane, Plane);
        });
      test('is the property wheels a string?', function() {
        assert.fail(myCar.wheels, String );
        });
    });


// Delete this line when you're ready for exercise 18 **/
