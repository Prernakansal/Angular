'use strict';

angular.module('Login',[]);

var app = angular.module("angularApp", ["Login", 'ngRoute']);


app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
                .when('/', {
                    controller: 'LoginController',
                    templateUrl: 'login/views/login.html'
                });

        $locationProvider.html5Mode(true);
    }]);