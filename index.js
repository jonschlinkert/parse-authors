/**
 * parse-authors <https://github.com/assemble/parse-authors>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var re = /^([^<(]+?)?[ \t]*(?:<([^>(]+?)>)?[ \t]*(?:\(([^)]+?)\)|$)/;

module.exports = function(str) {
  str = str.replace(/\r/g, '');
  var authors = [];

  str.split(/\n/g).forEach(function(line) {
    if(re.exec(line)) {
      authors.push({
        name: RegExp.$1,
        email: RegExp.$2,
        url: RegExp.$3
      });
    }
  });
  return authors;
};

