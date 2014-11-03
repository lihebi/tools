'use strict';

/**
 * @ngdoc function
 * @name toolsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the toolsApp
 */
angular.module('toolsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
