'use strict';

var passport = require( 'passport' );
var BasicStrategy = require( 'passport-http' ).BasicStrategy;

/**
 * @param {string} username
 * @param {string} password
 * @param {Function} done
 *
 * @returns {*}
 */
function authenticate( username, password, done ) {
  if ( username === 'admin' && password === 'admin' ) {
    return done(
      null,
      {
        display_name: 'admin display name',
        username: 'admin'
      }
    );
  }

  return done( null, false );
}

passport.use( new BasicStrategy( authenticate ) );
exports.isAuthenticated = passport.authenticate( 'basic', { session: false } );
