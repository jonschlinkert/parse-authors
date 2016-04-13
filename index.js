/**
 * parse-authors <https://github.com/assemble/parse-authors>
 *
 * Copyright (c) 2014-2016 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var author = require('parse-author');

module.exports = function(authors) {
  if (typeof authors === 'string') {
    authors = authors.trim().split(/[\r\n]+/);
  }
  return authors.reduce(function(acc, str) {
    return acc.concat(author(str));
  }, []);
};
