// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
   var app = angular.module('myApp',['ngRoute','ngCookies']);

   app.config(function ($routeProvider,$locationProvider) {
	    $locationProvider.hashPrefix('');
	    $routeProvider

            // route for the home page
            .when('/Register', {
                templateUrl : 'views/Register.html',
                controller  : 'UserController'
            })

            // route for the about page
            .when('/Login', {
                templateUrl : 'views/Login.html',
                controller  : 'UserController'
            })

            // route for the contact page
            .when('/Home', {
                templateUrl : 'views/Home.html',
                controller  : 'HomeController'
            });
    });

    // create the controller and inject Angular's $scope
   