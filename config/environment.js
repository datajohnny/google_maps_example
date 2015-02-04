/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-gmaps-example',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.googleMap = {
    key: 'AIzaSyCX6QVCjLkjgbu9rMhKVJd4C0dXdwh_L_Q'
  };

  ENV.contentSecurityPolicy = {
  'default-src': "'none'",
  'script-src': "'self' 'unsafe-eval' https://cdn.mxpnl.com http://maps.googleapis.com http://maps.gstatic.com http://mt0.googleapis.com http://mt1.googleapis.com", // Allow scripts from https://cdn.mxpnl.com
  'font-src': "'self' http://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
  'connect-src': "'self' https://api.mixpanel.com http://custom-api.local", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
  'img-src': "'self' http://maps.googleapis.com http://maps.gstatic.com http://mt0.googleapis.com http://mt1.googleapis.com http://khm0.googleapis.com http://khm1.googleapis.com",
  'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com 
  'media-src': "'self'"
}

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
  }

  return ENV;
};
