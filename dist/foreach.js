/*! foreach v1.0.0 | (c) 2014 @toddmotto | github.com/toddmotto/foreach */
var forEach = function (collection, callback, scope) {
  if (Object.prototype.toString.call(collection) === '[object Object]') {
    for (var prop in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, prop)) {
        callback.call(scope, collection[prop], prop, collection);
      }
    }
  } else {
    for (var i = 0, len = collection.length; i < len; i++) {
      callback.call(scope, i, collection[i]);
    }
  }
};
