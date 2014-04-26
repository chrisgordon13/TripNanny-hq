'use strict';

/* Factories */
angular.module('tn.factories', [])
    .factory('blog', ['$http', function($http) {

        var urlBase = 'https://www.googleapis.com/blogger/v3/blogs/210404798699886185/posts?key=AIzaSyA-1aYJiCoBYL4qEKA2VwSFnvdBFfh0hDU&callback=JSON_CALLBACK';
        var data = {};

        data.getPosts = function() {
            return $http.jsonp(urlBase);
        };

        return data;
    }])

    .factory('geo', ['$q', function($q) {
        
        var geo = {};

        geo.getCoords = function() {

            var def = $q.defer();

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        def.resolve(position.coords);
                    }
                );
            } else {
                def.reject("This device does not support geolocation.");
            }
            return def.promise;
        }

        return geo;
    }])

    .factory('airport', ['$http', function($http) {

        var urlBase = 'http://api.HealthyTravelGal.com/Airports';
        var data    = {};

        data.getNears = function(coords) {
            return $http.get(urlBase + '?lat=' + coords.latitude.toFixed(5) + '&lon=' + coords.longitude.toFixed(5) + '&limit=10');
        };

        data.getNearest = function(coords) {
            return $http.get(urlBase + '?lat=' + coords.latitude.toFixed(5) + '&lon=' + coords.longitude.toFixed(5) + '&limit=1');
        };

        data.getTerminals = function(code) {
            return $http.get(urlBase + '/' + code + '/Terminals');
        };

        data.getPlaces = function(code, terminal) {
            return $http.get(urlBase + '/' + code + '/Terminals/' + terminal + '/Places');
        };

        return data;
    }])

    .factory('place', ['$http', function($http) {

        var urlBase = 'http://api.HealthyTravelGal.com/Places';
        var data    = {};

        data.getPlace = function(id) {
            return $http.get(urlBase + '/' + id);
        };

        return data;
    }])

    .factory('visitor', ['$http', function($http) {

        var urlBase = 'https://api.TripNanny.com/Visitors';
        var authHeader = {headers: {'Authorization': 'Basic YXV0aC1DNjVBRTBCQy00Mjk4LTRDN0MtOEM4MC0zQUY1MkFDMzBFRkE6'}}; 
        var data = {};

        data.getVisitors = function () {
            return $http.get(urlBase, authHeader);
        };

        data.getVisitor = function (id) {
            return $http.get(urlBase + '/' + id, authHeader);
        };

        data.insertVisitor = function (visitor) {
            return $http.post(urlBase, visitor, authHeader);
        };

        data.updateVisitor = function (visitor) {
            return $http.put(urlBase + '/' + visitor.ID, visitor, authHeader);
        };

        data.deleteVisitor = function (id) {
            return $http.delete(urlBase + '/' + id, authHeader);
        };

        return data;
    }])
;
