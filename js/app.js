'use strict';

/* Application */
angular.module('tn', [
  'ngRoute',
  'tn.filters',
  'tn.services',
  'tn.directives',
  'tn.factories',
  'tn.controllers'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'partials/Home.html',
        controller: 'HomeCtrl'
    })
    .when('/Airport-Yes/:code', {
        templateUrl: 'partials/Airport-Yes.html',
        controller: 'AirportYesCtrl'
    })
    .when('/Airport-In/:code', {
        templateUrl: 'partials/Airport-In.html',
        controller: 'AirportInCtrl'
    })
    .when('Airport-Out/:code', {
        templateUrl: 'partials/Airport-Out.html',
        controller: 'AirportOutCtrl'
    })
    .when('/Blog', {
        templateUrl: 'partials/Blog.html',
        controller: 'BlogCtrl'
    })
    .when('/Airports', {
        templateUrl: 'partials/Airports.html',
        controller: 'AirportsCtrl'
    })
    .when('/Airports/:code/Terminals/:terminal', {
        templateUrl: 'partials/Places.html',
        controller: 'PlacesCtrl'
    })
    .when('/Places/:id', {
        templateUrl: 'partials/Place.html',
        controller: 'PlaceCtrl'
    })
    .otherwise({redirectTo: '/'})
  ;
}]);
