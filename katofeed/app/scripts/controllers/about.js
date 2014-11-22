'use strict';

/**
 * @ngdoc function
 * @name noweDzieloApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the noweDzieloApp
 */
angular.module('noweDzieloApp')
  .controller('AboutCtrl', function ($scope,$http) {
    // Set of Photos
    $scope.photos = [];
        $http.get('http://katofeed.local/getfbstream.php')
            .success(function(res) {
            $scope.photos = res;
            console.log(res);
        });
	

    // initial image index
    $scope._Index = 0;
    // $scope.description = $scope.photos[0].opis;
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
    $scope.showPhoto = function (index) {
        $scope._Index = index;
        
        console.log($scope.description);
    };
  });
