# foreach.js [![Build Status](https://travis-ci.org/toddmotto/foreach.png)](https://travis-ci.org/toddmotto/foreach)

foreach.js is a few bytes worth of `forEach()` implementation for Arrays, Objects and NodeLists that takes away repetitive object lookups and array notations. Works in all browsers not just modern. Pass in any type and it'll iterate and pass back all the necessary goods such as `index`, `element`, `property`, `value` and `object`. The syntax is a simple function wrapper.

```js
// syntax
forEach(collection[, callback[, context]]);

// example
var myArray = ['A', 'B', 'C', 'D'];
forEach(myArray, function (index, value) {
	// `this` will reference myArray: []
}, myArray); // note third param changing execution context
```

#### forEach() for Arrays/NodeLists
You can loop over an Array or NodeList using a standard `for` loop, however, NodeLists cannot be used in conjunction with the newer ECMAScript 5 `Array.prototype.forEach`. This script takes care of that in the same way it loops over an `Array`, you'll get the same stuff passed back:

```js
// Array:
forEach(['A', 'B', 'C', 'D'], function (index, value) {
	console.log(index); // 0, 1, 2, 3
	console.log(value); // A, B, C, D
});
// NodeList:
forEach(document.querySelectorAll('div'), function (index, value) {
	console.log(index); // 0, 1, 2, 3
	console.log(value); // <div>, <div>, <div>...
});
```

#### forEach() for Objects
Object iteration is usually done via a `for in` loop, we can wrap this up by passing back values which makes our loops cleaner and easier to manage:

```js
// Object:
forEach({ name: 'Todd', location: 'UK' }, function (value, prop, obj) {
	console.log(value); // Todd, UK
	console.log(prop); // name, location
  console.log(obj); // { name: 'Todd', location: 'UK' }, { name: 'Todd', location: 'UK' }
});
```

#### collection
Type: `Array|Object|NodeList`

Collection of items to iterate, could be an `Array`, `Object` or `NodeList`.

#### callback
Type: `Function`

Callback function for each iteration.

#### context
Type: `Array|Object|NodeList` Default: `null`

Object/NodeList/Array that `forEach` is iterating over, to use as the `this` value when executing callback.

## Installing with Bower
Use the repository hook:

```
bower install https://github.com/toddmotto/foreach.git
```

## Manual installation
Ensure you're using the files from the `dist` directory (contains compiled production-ready code). Ensure you place the script before the closing `</body>` tag.
  
```html
<body>
  <!-- html above -->
  <script src="dist/foreach.js"></script>
  <script>
  forEach([1,2,3], function () {});
  </script>
</body>
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using Grunt.

## Release history

- 1.0.0
  - Initial release
