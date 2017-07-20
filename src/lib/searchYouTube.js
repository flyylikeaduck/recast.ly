var searchYouTube = (options, callback) => {

  var settings = {
    'async': true,
    'crossDomain': true,
    'url': `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=${options.query}&maxResults=${options.max}&type=videos&part=snippet`,
    'method': 'GET',
    'headers': {
      'cache-control': 'no-cache',
      'postman-token': '5194e2c1-990e-0d9d-c104-f1c915cfccc4'
    }
  };

  $.ajax(settings).done(function (response) {
    console.log('Response!!', response.items);
    callback(response.items); // should pass response to .handleSearch (set videos state)
  });
};

window.searchYouTube = searchYouTube;


/*$.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message sent');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message', data);
  }
});*/