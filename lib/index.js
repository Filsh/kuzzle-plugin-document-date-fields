module.exports = function () {
  this.pipes = require('./config/pipes.js');
  this.init = function (config, context, isDummy) {
    console.log(config)
    // do something
  }

  this.addCreatedAt = function (requestObject, callback) {
    console.log(requestObject)
    requestObject.data.body.createdAt = Date.now();
    callback(null, requestObject);
  }
}
