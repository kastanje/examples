'use strict';

/**
 * module dependencies
 */
var basicAuth = require( '../auth/basic' );

/**
 * @param {net.Server} Server
 * @param {Function} Server.use
 *
 * @returns {undefined}
 */
function routes( Server ) {
  Server.use( '/', [ basicAuth.isAuthenticated ] );
}

module.exports = routes;
