if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this==null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

module.exports = function(app) {
  var express = require('express');
  var commentsRouter = express.Router();

  commentsRouter.get('/', function(req, res) {
    res.send({
      'comments': []
    });
  });

  commentsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  commentsRouter.get('/:id', function(req, res) {
    res.send({
      'comments': {
        id: req.params.id
      }
    });
  });

  commentsRouter.put('/:id', function(req, res) {
    res.send({
      'comments': {
        id: req.params.id
      }
    });
  });

  commentsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/comments', commentsRouter);
};
