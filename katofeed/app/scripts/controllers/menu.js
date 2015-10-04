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
    
  $scope.isCurrentPath = function (path) {
      return $location.path() == path;
    };
	
  });
