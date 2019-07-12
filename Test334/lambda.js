let util = require('./util');

exports.handler = function(event, context, callback) {
    
    util.printGreeting();
    callback(null, {"message": "Successfully executed"});
}