'use strict';

/**
 * @ngdoc overview
 * @name katofeedwwApp
 * @description
 * # katofeedApp
 *
 * Main module of the application.
 */
angular
  .module('katofeedApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
