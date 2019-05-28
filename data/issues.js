var faker = require('faker'),
  _ = require('lodash');

module.exports = function(index, userId, labels, status) {
  var statusVerb = status ? 'open' : 'closed';
  var dateEvent = new Date().toISOString();
  var issue = {
    id: index,
    title: faker.hacker.phrase(),
    userId: userId,
    labels: labels,
    state: statusVerb,
    locked: false,
    created_at: dateEvent,
    updated_at: dateEvent,
    body: faker.lorem.paragraph()
  };
  if (!status) {
    issue.closed_at = dateEvent;
  }
  return issue;
};
