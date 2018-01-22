// Application module that injects routing, controller, and directive dependencies.
var myApp = angular.module('myApp', ['ngRoute', 'myControllers', 'myDirectives'])
                     .config(function ($routeProvider) {
                         $routeProvider.when("/home", {
                             // templateUrl: 'views/list.html',
                             // controller: 'ListCtrl'
                         }
                    )
             // If no route is selected then use the 'home' route.
             .otherwise({ redirectTo: '/home' });
                     });

// Directive - Modifies HTML behaviour.
// directive() is a factory method to create directives.
var myDirectives = (function () {
    var myDirectives = angular.module('myDirectives', []);

    myDirectives.directive('myImagelayout', function () {
    return {
        restrict: 'A',
        scope: {
            pathsrc: '=',
            captionval: '=?',
            inverseColor: '=?',
            authorName: '=?',
            imageUrl: '=?'
        },
       
        templateUrl: function (element) { return 'views/custom-images.html' },
        }
    });
    return myDirectives;
}());


// Controller - dispatches inputs and outputs.
var myControllers = (function () {
    var myControllers = angular.module('myControllers', []);

    // Controllers are defined by the controller function.
    myControllers.controller('AppCtrl', ['$scope', function ($scope) {
        $scope.title = "Custom directive ";
    }]);
    return myControllers;
}());
