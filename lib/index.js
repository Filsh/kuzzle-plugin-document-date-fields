const safeEval = require('safe-eval')

function createPipe (pipe) {
  return function(requestObject, callback) {
    const value = safeEval(pipe.expression)

    if (pipe.fields && Array.isArray(pipe.fields)) {
      pipe.fields.forEach(field => requestObject.data.body[field] = value)
    } else {
      requestObject.data.body[pipe.field] = value
    }

    callback(null, requestObject)
  }
}

module.exports = function() {
  this.pipes = {}

  this.init = (config, context, isDummy) => {
    const pipes = config.pipes

    Object.keys(pipes).map(event => {
      this.pipes[event] = []

      if (Array.isArray(pipes[event])) {
        pipes[event].map((pipe, key) => {
          this[event + key] = createPipe.call(this, pipe)
          this.pipes[event].push(event + key)
        })
      } else {
        this.pipes[event] = createPipe.call(this, pipes[event])
      }
    })
  }
}
