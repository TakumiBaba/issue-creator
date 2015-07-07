import Issue from './issue';

var issue = new Issue();
issue.list(function() {
  console.log(arguments);
});
