# parse-authors [![NPM version](https://badge.fury.io/js/parse-authors.svg)](http://badge.fury.io/js/parse-authors)


> Parse a string into an array of objects with `name`, `email` and `url` properties following npm conventions. Useful for the `authors` property in package.json or for parsing an AUTHORS file into an array of authors objects.

**Related**

 - [author-regex](https://github.com/jonschlinkert/author-regex)
 - [parse-author](https://github.com/jonschlinkert/parse-author)
 - [parse-authors](https://github.com/jonschlinkert/parse-authors)


## Install
#### Install with [npm](npmjs.org):

```bash
npm i parse-authors --save-dev
```

## Run tests

```bash
npm test
```

## Usage

```js
var authors = require('parse-authors');

authors('Jon Schlinkert <jon.schlinkert@sellside.com> (https://github.com/jonschlinkert)');
//=> [{name: 'Jon Schlinkert', email: 'jon.schlinkert@sellside.com', url: 'https://github.com/jonschlinkert'}]

authors('Jon Schlinkert <jon.schlinkert@sellside.com>\nBrian Woodward (https://github.com/doowb)<');
//=>
// [
//  {name: 'Jon Schlinkert', email: 'jon.schlinkert@sellside.com', url: ''},
//  {name: 'Brian Woodward', email: '', url: 'https://github.com/doowb'}
// ]
```

Any of the properties can be used or missing:

```js
authors()
//=> {name: '', email: '', url: ''}

authors('Jon Schlinkert (https://github.com/jonschlinkert)');
//=> [{name: 'Jon Schlinkert', email: '', url: 'https://github.com/jonschlinkert'}]
```

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on September 29, 2014._