'use strict';

angular.module('Login', []);
angular.module('Register', []);

var app = angular.module("angularApp", ["Login", 'Register', 'ngRoute', 'ngMessages']);


app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
                .when('/', {
                    controller: 'LoginController',
                    templateUrl: 'login/views/login.html'
                })
                .when('/register', {
                    controller: 'RegisterController',
                    templateUrl: 'register/views/register.html'
                });

        $locationProvider.html5Mode(true);
    }]);