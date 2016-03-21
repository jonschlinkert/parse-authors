'use strict';

require('mocha');
var assert = require('assert');
var authors = require('./');

describe('authors:', function() {
  it('should return empty fields when info is missing.', function() {
    assert.deepEqual(authors(''), [{name: '', email: '', url: ''}]);
  });

  it('should parse an array of author strings', function() {
    assert.deepEqual(authors(['Jon Schlinkert <jon@foo.email> (https://github.com/jonschlinkert)']), [
      {name: 'Jon Schlinkert', email: 'jon@foo.email', url: 'https://github.com/jonschlinkert'}
    ]);
  });

  it('should return a parsed author object.', function() {
    assert.deepEqual(authors('Jon Schlinkert <jon@foo.email> (https://github.com/jonschlinkert)'), [
      {name: 'Jon Schlinkert', email: 'jon@foo.email', url: 'https://github.com/jonschlinkert'}
    ]);
  });

  it('should return an array of author objects.', function() {
    var fixture = 'Jon Schlinkert <jon@foo.email> (https://github.com/jonschlinkert)\nBrian Woodward <brian@bar.email> (https://github.com/doowb)';
    assert.deepEqual(authors(fixture), [
      {name: 'Jon Schlinkert', email: 'jon@foo.email', url: 'https://github.com/jonschlinkert'},
      {name: 'Brian Woodward', email: 'brian@bar.email', url: 'https://github.com/doowb'}
    ]);
  });

  it('should return name and email only .', function() {
    var fixture = 'Jon Schlinkert (https://github.com/jonschlinkert)\nBrian Woodward (https://github.com/doowb)';
    assert.deepEqual(authors(fixture), [
      {name: 'Jon Schlinkert', email: '', url: 'https://github.com/jonschlinkert'},
      {name: 'Brian Woodward', email: '', url: 'https://github.com/doowb'}
    ]);
  });

  it('should return mixed properties.', function() {
    assert.deepEqual(authors('Jon Schlinkert \nBrian Woodward <brian@bar.email> (https://github.com/doowb)'), [
      {name: 'Jon Schlinkert', email: '', url: ''},
      {name: 'Brian Woodward', email: 'brian@bar.email', url: 'https://github.com/doowb'}
    ]);
  });

  it('should return mixed properties.', function() {
    assert.deepEqual(authors('<jon@foo.email> (https://github.com/jonschlinkert)\nBrian Woodward <brian@bar.email> '), [
      {name: '', email: 'jon@foo.email', url: 'https://github.com/jonschlinkert'},
      {name: 'Brian Woodward', email: 'brian@bar.email', url: ''}
    ]);
  });

  it('should return mixed properties.', function() {
    assert.deepEqual(authors('<jon@foo.email> \n<brian@bar.email> (https://github.com/doowb)'), [
      {name: '', email: 'jon@foo.email', url: ''},
      {name: '', email: 'brian@bar.email', url: 'https://github.com/doowb'}
    ]);
  });

  it('should return name only.', function() {
    assert.deepEqual(authors('Jon Schlinkert\nBrian Woodward'), [
      {name: 'Jon Schlinkert', email: '', url: ''},
      {name: 'Brian Woodward', email: '', url: ''}
    ])
  });

  it('should return email only.', function() {
    assert.deepEqual(authors('<jon@foo.email>\n<brian@bar.email>'), [
      {name: '', email: 'jon@foo.email', url: ''},
      {name: '', email: 'brian@bar.email', url: ''}
    ]);
  });

  it('should return url only.', function() {
    assert.deepEqual(authors('(https://github.com/jonschlinkert)\n(https://github.com/doowb)'), [
      {name: '', email: '', url: 'https://github.com/jonschlinkert'},
      {name: '', email: '', url: 'https://github.com/doowb'}
    ]);
  });
});
