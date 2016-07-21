var app = angular.module('cock', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/Home");
    $stateProvider        
        .state('menu', {
          url: "/app",
          templateUrl: "partials/menu.html",
          controller: "menuCtrl"
        })
        .state('menu.home', {
          url: "/Home",
          templateUrl: "views/home.html",
          controller: "homeCtrl"
        })
}) 

app.controller("homeCtrl", ['$scope', '$http', '$rootScope', function ($s, $http, $rs) {                  
   $s.teste = function(){
    console.log("testando 2");
  }
  $s.teste();
}]);

app.controller("menuCtrl", ['$scope', '$http', '$rootScope', function ($s, $http, $rs) {                  
  
  $s.teste = function(){
    console.log("testando");
  }
  $s.teste();

}]);


