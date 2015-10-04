'use strict';

/**
 * @ngdoc function
 * @name katofeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the katofeedApp
 */
angular.module('noweDzieloApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.imagesArray = [];
	
	
 
	$http.get('getfbstream.php')
            .success(function(res) {
            $scope.imagesArray = res;
            console.log(res);
            });
  
	
  });
