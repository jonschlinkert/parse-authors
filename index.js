/**
 * parse-authors <https://github.com/assemble/parse-authors>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var author = require('parse-author');

module.exports = function (str) {
  return str.replace(/\r/g, '').split('\n')
    .reduce(function (authors, line) {
      return authors.concat(author(line));
    }, []);
};