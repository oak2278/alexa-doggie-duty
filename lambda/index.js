var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {

  'LaunchRequest': function () {
    this.emit(':ask', 'Welcome to Doggie Duty!', 'Try saying I have fed the dogs');
  },
  
  'Feed': function () {
    this.emit(':tell', 'Ok, I have recorded that the dogs have been fed!' )
  }

};
