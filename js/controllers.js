'use strict';

/* Controllers */
angular.module('tn.controllers', [])

    .controller('NavBarCtrl', ['$scope', '$location', function($scope, $location) {
        
        $scope.navBarActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    }])

    .controller('HomeCtrl', ['$scope', 'geo', 'airport', function($scope, geo, airport) {
        $scope.show     = false;
        $scope.coords;
        $scope.airport;
        $scope.status;

        var loadGeo = function() {
            return geo
                .getCoords()
                .then(function(coords) {
                    $scope.coords = coords;
                    return coords;
                });
        };

        var loadAirport = function(coords) {
            return airport
                .getNearest(coords)
                .then(function(airport) {
                    $scope.airport = airport.data[0];
                    return airport;
                });
        };

        loadGeo()
            .then(loadAirport)
            .finally(function() {
                $scope.show = true
            });

        $scope.coords = null;
        $scope.airport = null;
    }])

    .controller('AirportYesCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
        $scope.code = $routeParams.code;
    }])

    .controller('AirportInCtrl', ['$scope', '$routeParams', 'airport', function($scope, $routeParams, airport) {
        $scope.code = $routeParams.code;
        $scope.terminals;
        $scope.status;

        getTerminals($scope.code);

        function getTerminals(code) {
            airport.getTerminals(code)
                .success(function(data) {
                    $scope.terminals = data;
                })
                .error(function(error) {
                    $scope.status = 'Unable to load terminal data for this airport: ' + error.message;
                });
        }
    }])

    .controller('AirportOutCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
        $scope.code = $routeParams.code;
    }])

    .controller('BlogCtrl', ['$scope', 'blog', function($scope, blog) {
        $scope.posts;
        $scope.status;

        getPosts();

        function getPosts() {
            blog.getPosts()
                .success(function(data) {
                    $scope.posts = data.items;
                })
                .error(function(error) {
                    $scope.status = 'Unable to load blog posts data: ' + error.message;
                });
        }
    }])

    .controller('AirportsCtrl', ['$scope', 'geo', 'airport', function($scope, geo, airport) {
        $scope.show     = false;
        $scope.coords;
        $scope.airports;
        $scope.status;

        var loadGeo = function() {
            return geo
                .getCoords()
                .then(function(coords) {
                    $scope.coords = coords;
                    return coords;
                });
        };

        var loadAirport = function(coords) {
            return airport
                .getNears(coords)
                .then(function(airports) {
                    $scope.airports = airports.data;
                    return airport;
                });
        };

        loadGeo()
            .then(loadAirport)
            .finally(function() {
                $scope.show = true
            });

        $scope.coords = null;
        $scope.airport = null;
    }])

    .controller('PlacesCtrl', ['$scope', '$routeParams', 'airport', function($scope, $routeParams, airport) {
        $scope.code     = $routeParams.code;
        $scope.terminal = $routeParams.terminal;
        $scope.places;
        $scope.status;

        getPlaces($scope.code, $scope.terminal);

        function getPlaces(code, terminal) {
            airport.getPlaces(code, terminal)
                .success(function(data) {
                    $scope.places = data;
                })
                .error(function(error) {
                    $scope.status = 'Unable to load places for this terminal: ' + error.message;
                });
        }
    }])

    .controller('PlaceCtrl', ['$scope', '$routeParams', 'place', function($scope, $routeParams, place) {
        $scope.id = $routeParams.id;
        $scope.place;
        $scope.status;

        getPlace($scope.id);

        function getPlace(id) {
            place.getPlace(id)
                .success(function(data) {
                    $scope.place = data;
                })
                .error(function(error) {
                    $scope.status = 'Unable to load place: ' + error.message;
                });
        }
    }])
;
