'use strict';

/* Directives */
angular.module('tn.directives', [])
    .directive("headerBar", function() { 
        return {
            restrict: "AE", 
            replace: true, 
            transclude: true,
            templateUrl: "partials/Header-Bar.html" 
        };
    })

    .directive("navBar", function() { 
        return {
            restrict: "AE", 
            replace: true, 
            transclude: true,
            templateUrl: "partials/Nav-Bar.html" 
        };
    })
;
