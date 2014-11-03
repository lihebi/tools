'use strict';

/**
 * @ngdoc function
 * @name toolsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the toolsApp
 */
angular.module('toolsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
