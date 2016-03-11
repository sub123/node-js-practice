var Twitter = require('node-tweet-stream')
  , t = new Twitter({
    consumer_key: 'EUxZQ0DqtGZJipSo844gOHglz',
    consumer_secret: 'yUXfx6Yty2eEjSm8HFMSvvcZnRbytZ6Br1j54rB9j9jUyYXQhT',
    token: '2907446149-1rpF9fwEUKJuT2UmLFZxHI1RGNPfrihg0C2jGEy',
    token_secret: 'BBD9EPBnbFm1Ev1LFacyX4A4AicCF6AId4rl0icrRCkW1'
  })
  t.on('tweet', function (tweet) {
  console.log('tweet received', tweet)
})
 
t.on('error', function (err) {
  console.log('Oh no')
})
 
t.track('nodejs')
t.track('pizza')