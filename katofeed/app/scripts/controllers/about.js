'use strict';

/**
 * @ngdoc function
 * @name katofeedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the katofeedApp
 */
angular.module('katofeedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
