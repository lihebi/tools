'use strict';

/**
 * @ngdoc overview
 * @name toolsApp
 * @description
 * # toolsApp
 *
 * Main module of the application.
 */
angular
  .module('toolsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/katex', {
        templateUrl: 'views/katex.html',
        controller: 'KatexCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
