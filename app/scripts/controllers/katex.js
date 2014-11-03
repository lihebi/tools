/* global katex */
'use strict';

/**
 * @ngdoc function
 * @name toolsApp.controller:KatexCtrl
 * @description
 * # KatexCtrl
 * Controller of the toolsApp
 */
angular.module('toolsApp')
  .controller('KatexCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.$watch('input', function() {
      katex.render($scope.input, document.getElementById('katex-out'));
    });
  });
