/**
 * parse-authors <https://github.com/assemble/parse-authors>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';


var should = require('should');
var authors = require('./');


describe('authors:', function () {
  it('should return a parsed author object.', function () {
    var fixture = 'Jon Schlinkert <jon@foo.email> (https://github.com/jonschlinkert)';
    authors(fixture).should.eql([
      {
        name: 'Jon Schlinkert',
        email: 'jon@foo.email',
        url: 'https://github.com/jonschlinkert'
      }
    ]);
  });

  it('should return an array of author objects.', function () {
    var fixture = 'Jon Schlinkert <jon@foo.email> (https://github.com/jonschlinkert)\nBrian Woodward <brian@bar.email> (https://github.com/doowb)';
    authors(fixture).should.eql([
      {
        name: 'Jon Schlinkert',
        email: 'jon@foo.email',
        url: 'https://github.com/jonschlinkert'
      },
      {
        name: 'Brian Woodward',
        email: 'brian@bar.email',
        url: 'https://github.com/doowb'
      }
    ]);
  });

  it('should return name and email only .', function () {
    var fixture = 'Jon Schlinkert (https://github.com/jonschlinkert)\nBrian Woodward (https://github.com/doowb)';
    authors(fixture).should.eql([
      {
        name: 'Jon Schlinkert',
        email: '',
        url: 'https://github.com/jonschlinkert'
      },
      {
        name: 'Brian Woodward',
        email: '',
        url: 'https://github.com/doowb'
      }
    ]);
  });

  it('should return mixed properties.', function () {
    var fixture = 'Jon Schlinkert \nBrian Woodward <brian@bar.email> (https://github.com/doowb)';
    authors(fixture).should.eql([
      {
        name: 'Jon Schlinkert',
        email: '',
        url: ''
      },
      {
        name: 'Brian Woodward',
        email: 'brian@bar.email',
        url: 'https://github.com/doowb'
      }
    ]);
  });

  it('should return mixed properties.', function () {
    var fixture = '<jon@foo.email> (https://github.com/jonschlinkert)\nBrian Woodward <brian@bar.email> ';
    authors(fixture).should.eql([
      {
        name: '',
        email: 'jon@foo.email',
        url: 'https://github.com/jonschlinkert'
      },
      {
        name: 'Brian Woodward',
        email: 'brian@bar.email',
        url: ''
      }
    ]);
  });

  it('should return mixed properties.', function () {
    var fixture = '<jon@foo.email> \n<brian@bar.email> (https://github.com/doowb)';
    authors(fixture).should.eql([
      {
        name: '',
        email: 'jon@foo.email',
        url: ''
      },
      {
        name: '',
        email: 'brian@bar.email',
        url: 'https://github.com/doowb'
      }
    ]);
  });

  it('should return name only.', function () {
    authors('Jon Schlinkert\nBrian Woodward').should.eql([
      {
        name: 'Jon Schlinkert',
        email: '',
        url: ''
      },
      {
        name: 'Brian Woodward',
        email: '',
        url: ''
      }
    ])
  });

  it('should return email only.', function () {
    var fixture = '<jon@foo.email>\n<brian@bar.email>';
    authors(fixture).should.eql([
      {
        name: '',
        email: 'jon@foo.email',
        url: ''
      },
      {
        name: '',
        email: 'brian@bar.email',
        url: ''
      }
    ]);
  });

  it('should return url only.', function () {
    var fixture = '(https://github.com/jonschlinkert)\n(https://github.com/doowb)';
    authors(fixture).should.eql([
      {
        name: '',
        email: '',
        url: 'https://github.com/jonschlinkert'
      },
      {
        name: '',
        email: '',
        url: 'https://github.com/doowb'
      }
    ]);
  });
});