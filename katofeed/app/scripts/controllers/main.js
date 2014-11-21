'use strict';

/**
 * @ngdoc function
 * @name katofeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the katofeedApp
 */
angular.module('katofeedApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
