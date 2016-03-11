var shell = require("python-shell");
shell.run('hello.py', function (err,results) {
  if (err) console.log(err);
  console.log(results.toString());
  console.log('finished');
});
