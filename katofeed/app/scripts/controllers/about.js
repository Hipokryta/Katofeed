'use strict';

/**
 * @ngdoc function
 * @name noweDzieloApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the noweDzieloApp
 */
angular.module('noweDzieloApp')
  .controller('AboutCtrl', function ($scope) {
    // Set of Photos
     $scope.photos = [];
    $scope.photos[0] = {src:'images/kato.jpg',desc:'DUPA'};
    $scope.photos[1] = {src:'images/COMA.jpg',desc:'poqpeowqp'};
    $scope.photos[2] = {src:'images/images (2).jpg', desc:'4tttt'};
  	$scope.photos[3] = {src:'images/images.jpg',desc:'jjdvlkjvd'};
	$scope.photos[4] = {src:'images/1.jpg',desc:'DUPA'};
    $scope.photos[5] = {src:'images/COMA.jpg',desc:'poqpeowqp'};
    $scope.photos[6] = {src:'images/images (2).jpg', desc:'4tttt'};
  	$scope.photos[7] = {src:'images/images.jpg',desc:'jjdvlkjvd'};
	$scope.photos[8] = {src:'images/1.jpg',desc:'DUPA'};
    $scope.photos[9] = {src:'images/COMA.jpg',desc:'poqpeowqp'};
    $scope.photos[10] = {src:'images/images (2).jpg', desc:'4tttt'};
  	$scope.photos[11] = {src:'images/images.jpg',desc:'jjdvlkjvd'};
	$scope.photos[12] = {src:'images/1.jpg',desc:'DUPA'};
    $scope.photos[13] = {src:'images/COMA.jpg',desc:'poqpeowqp'};
    $scope.photos[14] = {src:'images/images (2).jpg', desc:'4tttt'};
  	$scope.photos[15] = {src:'images/images.jpg',desc:'jjdvlkjvd'};
	

    // initial image index
    $scope._Index = 0;
    $scope.description = $scope.photos[0].desc;
    // if a current image is the same as requested image
    $scope.isActive = function (index,desc) {
        return $scope._Index === index;
        
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index, desc) {
        $scope._Index = index;
        $scope.description = desc;
        console.log($scope.description);
    };
  });
