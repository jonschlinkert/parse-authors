/**
 * parse-authors <https://github.com/assemble/parse-authors>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

module.exports = function(str) {
  var authors = [];
  // var re = /(.+?) (?:<(.+)> ?)?\((.+)\)/;
  var re = /^([\s\S]+?)\s+(?:<([\s\S]+?)>\s+)?(?:\(([\s\S]+?)\))/;

  // Each line should be a single author.
  var authorsArray = str.split(/\n/);

  // Convert each line into an object
  authorsArray.map(function (author) {
    var matches = author.match(re) || [];

    authors.push({
      name: matches[1],
      email: matches[2] || '',
      url: matches[3] || ''
    } || {});
  });
  return authors;
};

