/**
 * Created by subbaraju on 25/3/2016.
 */
angular.module('myApp')
  .factory('Person', function () {
    return function Person (name) {
      this.name = name;
    };
  });


//test
describe('Person', function () {

  var Person;
  beforeEach(module('myApp'));
  beforeEach(inject(function (_Person_) {
    Person = _Person_;
  }));

  describe('Constructor', function () {

    it('assigns a name', function () {
      expect(new Person('Ben')).to.have.property('name', 'Ben');
    });

  });

});
