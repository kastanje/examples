/* eslint no-process-env: off */
/* eslint no-sync: off */

'use strict';

/**
 * module dependencies
 */
var createServer = require( 'kastanje-server-001' );
var fs = require( 'fs' );
var routes = require( './routes' );
var passport = require( 'passport' );

/**
 * server setup
 */
var Server;
var server_options;

server_options = {
  debug: true,
  ssl: {
    cert: fs.readFileSync( process.env.SSL_CRT.toString() ),
    key: fs.readFileSync( process.env.SSL_KEY.toString() )
  }
};

Server = createServer( server_options );
Server.use( '.', [ passport.initialize() ] );

routes( Server );
Server.listen( 8081 );
