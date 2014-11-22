'use strict';

/**
 * @ngdoc directive
 * @name noweDzieloApp.directive:menu
 * @description
 * # menu
 */
angular.module('noweDzieloApp')
  .directive('menu', function () {
    return {
      templateUrl: 'views/menu.html',
      restrict: 'AE',
      controller: 'MenuCtrl'
      
    };
  });
