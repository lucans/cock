const SERVER_PATH = "../server/";

var app = angular.module('cock', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("app/Home");
    $stateProvider        
        .state('menu', {
          url: "/app",
          templateUrl: "partials/menu.html",
          controller: "homeCtrl"
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

    this.toPayDay = function (){
        var febDate  = new Date(2010, 1, 14); //Month is 0-11 in JavaScript
        febDate.setDate(30);
        return febDate.toDateString();
    };

});

app.controller("homeCtrl", ['$scope', '$http', '$rootScope','DateProvider', function ($s, $http, $rs, Date) {    

    $s.dados = {
      "user": [
          { "nome":"Lucas", "email": "lucas@lucans.com.br" }              
      ],
      "numeros": [
          { "salario": 1550.55, "dias_trabalhados": 24, "proximo_salario" : 17, "horas_produtividade" : 56}          
      ],
   }

    $s.dao = function(tipo, table, funcao, oParametros){
      switch(tipo){
        case 'get':
          $http.get("server/dao/get.php?table=" + table + "&f=" + funcao + "&p=" + oParametros).success(function (result) {
              return result;
          });
          break;        
        case 'post':
          $http.post("server/dao/add.php?table=" + table + "&f=" + funcao + "&p=" + oParametros).success(function (result) {
              return result;
          });
          break;
        case 'put':
          $http.put("server/dao/update.php?table=" + table + "&f=" + funcao +  "&p=" +  oParametros).success(function (result) {
              return result;
          });
          break;
        default:
          console.log("Nothing at all.");
      }
    };


}]);