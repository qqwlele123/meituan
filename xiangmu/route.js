var app = angular.module("myApp", ['ngRoute', 'angularCSS']);

app.config(['$routeProvider', function($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl: 'home/html/home.html'
    })
    .when('/nearby', {
        templateUrl: 'nearby/html/nearby.html'
    })
    .when('/mine', {
        templateUrl: 'mine/html/mine.html'
    })
    .otherwise({
        redirectTo: '/'
    })
}])
