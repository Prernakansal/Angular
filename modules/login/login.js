'use strict';

var app = angular.module("loginApp",['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
  $routeProvider
    .when('/',{
        templateUrl: 'login/login.html',
    //admin: false
    })
}]);
