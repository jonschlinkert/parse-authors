var path = require('path');
var should = require('should');
var authors = require('..');


describe('authors:', function () {

  describe('when the AUTHORS file is parsed', function () {
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
  });

  describe('when the AUTHORS file is parsed, and the email field is missing', function () {
    it('should return an array of author objects with empty email fields.', function () {
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
  });

  describe('when only the name exists', function () {
    it('should return an array of author objects with empty properties for the missing fields.', function () {
      authors('Jon Schlinkert\nBrian Woodward').shoud.eql([
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
  });
});