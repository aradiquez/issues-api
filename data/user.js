var faker = require('faker'),
  _ = require('lodash');

module.exports = (function() {
  return _.times(100, function(index) {
    var user = {
      id: index + 1
    };
    return Object.assign(user, faker.helpers.userCard());
  });
})();
