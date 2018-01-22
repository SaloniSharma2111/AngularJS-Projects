var myControllers = (function () {
    'use strict';
    var ctrls = angular.module('myControllers', []);

       // Parent controller
    ctrls.controller('AppCtrl', ['$scope', function ($scope) {
        $scope.title = "Contact form";
    }]);

    // Child controller - Inject scope and $routeParams service.
    ctrls.controller('ListCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
        $scope.SendEmail= function(input, val)
       {
           $scope.validate="true";
           $routeParams.email= input; 
           $scope.successMessage= "Your message has been delivered to " + input.text;
            if(val==false){
                $scope.isSuccess="true";
            }           
       }
        
    }]);

    // Another child controller - About Controller
      
     ctrls.controller('AboutCtrl', ['$scope', function ($scope) {
       
    }]);

    return ctrls;
}());
