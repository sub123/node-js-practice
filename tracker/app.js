var Twitter = require('node-tweet-stream')
  , t = new Twitter({
    consumer_key: '##########################',
    consumer_secret: '####################',
    token: '##################',
    token_secret: '###################'
  })
  t.on('tweet', function (tweet) {
  console.log('tweet received', tweet)
})
 
t.on('error', function (err) {
  console.log('Oh no')
})
 
t.track('nodejs')
t.track('pizza')