var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('AppCtrl', ['$scope', function ($scope) {
    
    /* This data cannot be changed */
    var weather = [{"high":"53","low":"45","text":"Showers","cityName":"Vancouver"},
                   {"high":"76","low":"61","text":"Partly Cloudy", "cityName":"Havana Cuba"},
                   {"high":"77","low":"56","text":"Clear","cityName":"San Diego"}, 
                   {"high":"82","low":"70","text":"Partly Cloudy","cityName":"Honolulu"}];

    // Define title model.
    $scope.title = "AngularJS - Weather Information Page(Assignment 1)";
    $scope.forecast = getAllWeather();
    $scope.isVisible=false;
    $scope.result;
    $scope.value="Fahrenheit"; 
    $scope.update = function(value) {
       if(value=="Celcius")
        {
             var tempHigh= $scope.result['high'];
             var tempLow= $scope.result['low'];
             $scope.result['high']= (parseFloat((tempHigh-32)/1.8).toFixed(0)).toString();
             $scope.result['low']= (parseFloat((tempLow-32)/1.8).toFixed(0)).toString();
        }
        else
        {
            var tempHigh= $scope.result['high'];
            var tempLow= $scope.result['low'];
            $scope.result['high']= Math.round((parseFloat((tempHigh*1.8)+32))).toString();
            $scope.result['low']= Math.round((parseFloat((tempLow*1.8)+32))).toString();
        }
    }
    
  $scope.propertyName = 'cityName';
  $scope.reverse = true;
  $scope.weather = weather;

  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };
   
     function getAllWeather() {
      return weather;
    } 

    $scope.showWeather = function(city)  {
        $scope.isVisible=true;
        $scope.value="Fahrenheit"; 
      if(city=="Vancouver")
            {
              $scope.result= $scope.forecast[0];
              return $scope.result;
            }
        if(city=="Havana Cuba")
            {
              $scope.result= $scope.forecast[1];
              return $scope.result;  
            }
        if(city=="San Diego")
            {
               $scope.result= $scope.forecast[2];
              return $scope.result; 
            }
        if(city=="Honolulu")
            {
               $scope.result= $scope.forecast[3];
               return $scope.result; 
            }        
    }
            
}]);
