/**
 * parse-authors <https://github.com/assemble/parse-authors>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(str) {
  var re = /^([\s\S]+?)\s+(?:<([\s\S]+?)>\s+)?(?:\(([\s\S]+?)\))/;
  var authors = [];

  // Convert each line into an object
  str.split(/[\r\n]*/g).map(function (author) {
    var matches = author.match(re) || [];

    authors.push({
      name: matches[1],
      email: matches[2] || '',
      url: matches[3] || ''
    } || {});
  });
  return authors;
};

