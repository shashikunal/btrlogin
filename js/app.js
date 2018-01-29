var myApp = angular.module("loginApp" , ["ngRoute" , "firebase"]);

myApp.config(["$routeProvider" , "$locationProvider" , function($routeProvider , $locationProvider){
    $routeProvider.when("/login" , {
        templateUrl : "/views/login.html",
        controller : "registerCtr"
    }).
    when("/register" , {
        templateUrl : "/views/register.html",
        controller : "registerCtr"
    }).
    when("/success",{
        templateUrl : "/views/success.html",
        controller : "successCtr"
    }).
    when("/home" , {
        templateUrl : "/views/home.html"
       
    }).otherwise({
        redirectTo:"/login"
    });

}]);