const path = require('path');
const file = require('fs-utils');
const expect = require('chai').expect;
const authors = require('../');

var fixture = file.readFileSync('test/fixtures/AUTHORS');
var noemail = file.readFileSync('test/fixtures/NO-EMAIL');
var noemail = file.readFileSync('test/fixtures/NO-EMAIL');
var nameonly = file.readFileSync('test/fixtures/NAME');


describe('authors:', function () {

  describe('when the AUTHORS file is parsed', function () {
    it('should return an array of author objects.', function () {
      var actual = authors(fixture);
      var expected = [
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
      ]
      expect(actual).to.eql(expected);
    });
  });

  describe('when the AUTHORS file is parsed, and the email field is missing', function () {
    it('should return an array of author objects with empty email fields.', function () {
      var actual = authors(noemail);
      var expected = [
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
      ]
      expect(actual).to.eql(expected);
    });
  });

  // describe('when only the name is filled out', function () {
  //   it('should return an array of author objects with empty properties for the missing fields.', function () {
  //     var actual = authors(nameonly);
  //     var expected = [
  //       {
  //         name: 'Jon Schlinkert',
  //         email: '',
  //         url: ''
  //       },
  //       {
  //         name: 'Brian Woodward',
  //         email: '',
  //         url: ''
  //       }
  //     ]
  //     expect(actual).to.eql(expected);
  //   });
  // });
});