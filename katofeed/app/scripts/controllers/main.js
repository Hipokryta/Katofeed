'use strict';

/**
 * @ngdoc function
 * @name katofeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the katofeedApp
 */
angular.module('noweDzieloApp')
  .controller('MainCtrl', function ($scope,$location, $http) {
//    $scope.imagesArray = [];
//    $scope.imagesArray[0] = {image:'images/1.jpg',desc:'DUPA'};
//    $scope.imagesArray[1] = {image:'images/COMA.jpg',desc:'poqpeowqp'};
//    $scope.imagesArray[2] = {image:'images/images (2).jpg', desc:'4tttt'};
//  	$scope.imagesArray[3] = {image:'images/images.jpg',desc:'jjdvlkjvd'};
//	
	$scope.changingStyle = null;
	$scope.endOfSite = 10;

	$http.get('http://katofeed.local/getfbstream.php')
            .success(function(res) {
            $scope.imagesArray = res;
            console.log(res);
            });
  $scope.isCurrentPath = function (path) {
      return $location.path() == path;
    };
	
  });
