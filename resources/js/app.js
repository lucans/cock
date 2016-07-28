const SERVER_PATH = "../server/";

var app = angular.module('cock', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("app/Home");
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

.service('DateProvider', function () {

    this.date = new Date();
    this.payment = new Date();
    
    this.today = function () {
        return this.date.getDate();
    }

    this.dayOfWeek = function () {
        return this.date.getDay();
    }

    this.getHour = function (){
        return this.date.getHours() + ':' + this.date.getMinutes();
    } 

    // this.getHourMinute = function (){
    //     return this.date.getHours() + ':' + this.date.getMinutes();
    // }    

    // this.getHourMinuteSecond = function (){
    //     return this.date.getHours() + ':' + this.date.getMinutes();
    // }

    this.toPayDay = function (){
        return this.payment +  this.date;
    };

});

app.controller("homeCtrl", ['$scope', '$http', '$rootScope','DateProvider', function ($s, $http, $rs, Date) {  
  
    // $s.today = Date.toPayDay();
    // console.log($s.today);


    $s.selectUsers = function(tipo, oParametros){


      console.log(tipo, oParametros);

        var url = SERVER_PATH + 'select.php?p=';
        
        $http.get(url + tipo + oParametros).success(function (result) {
            $s.users = result;
        });
          
        // $http.post("dao/add.php?p=" + sRequestName, {
        //     oParametros: oParametros
        // });
    }


}]);

app.controller("menuCtrl", ['$scope', '$http', '$rootScope', function ($s, $http, $rs) {                  

}]);


