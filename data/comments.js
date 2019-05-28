var faker = require('faker'),
  _ = require('lodash');

module.exports = function(index, issueId) {
  return {
    id: index,
    issueId: issueId,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    body: faker.lorem.paragraph()
  };
};
