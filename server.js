var _ = require('lodash');

const users = require('./data/user'),
  tags = require('./data/tags'),
  issues = require('./data/issues'),
  comments = require('./data/comments');

function randomPick(alternatives) {
  return Math.floor(Math.random() * alternatives + 1);
}

function decideCreationAssing(size, amount) {
  return Array.from({ length: size }, () => randomPick(amount));
}

function selectTags() {
  return _.sampleSize(tags, randomPick(10));
}

function generateIssues() {
  var issueList = [];
  _.forEach(decideCreationAssing(100, 100), function(value, index) {
    issueList.push(issues(index + 1, value, selectTags(), getStatus()));
  });
  return issueList;

  function getStatus() {
    return randomPick(10) > 5;
  }
}

function generateComments() {
  var commentList = [];
  _.forEach(decideCreationAssing(100, 100), function(value, index) {
    commentList.push(comments(index + 1, value));
  });
  return commentList;
}

module.exports = () => {
  return {
    users: users,
    tags: tags,
    issues: generateIssues(),
    comments: generateComments()
  };
};
