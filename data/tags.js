var faker = require('faker'),
  _ = require('lodash');

module.exports = (function() {
  return _.times(10, function(index) {
    return {
      name: faker.hacker.ingverb(),
      id: index
    };
  });
})();
