'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MenuCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
