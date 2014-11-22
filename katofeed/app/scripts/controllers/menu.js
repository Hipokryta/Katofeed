'use strict';

/**
 * @ngdoc function
 * @name katofeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the katofeedApp
 */
angular.module('noweDzieloApp')
  .controller('MenuCtrl', function ($scope,$location) {
    
	console.log('dupa');
  $scope.isCurrentPath = function (path) {
      return $location.path() == path;
    };
	
  });
