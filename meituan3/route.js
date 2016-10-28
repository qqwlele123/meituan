var app = angular.module("myApp", ['ngRoute', 'angularCSS']);

app.config(['$routeProvider', function($routeProvider,$CSS){

    $routeProvider
    .when('/', {
        templateUrl: 'home/html/home.html',
        controller:'homeCtrl'
    })
    .when('/nearby', {
        templateUrl: 'nearby/html/nearby.html',
        controller:'nearbyCtrl'
    })
    .when('/mine', {
        templateUrl: 'mine/html/mine.html',
        controller:'mineCtrl'
    })
    .when('/set', {
        templateUrl: 'mine/html/set.html',
        controller:'setCtrl'
    })
    .when('/message', {
        templateUrl: 'mine/html/message.html',
        controller:'messageCtrl'
    })
    .when('/movie', {
        templateUrl: 'home/html/movie.html',
        controller: 'movieCtrl'
    })
    .when('/city', {
        templateUrl: 'home/html/city.html',
        controller: 'cityCtrl'
    })
    .when('/search', {
        templateUrl: 'home/html/search.html',
        controller: 'searchCtrl'
    })
    .when('/recommend', {
        templateUrl: 'home/html/recommend.html',
        controller: 'recommendCtrl'
    })
    .when('/myGoods', {
        templateUrl: 'mine/html/myGoods.html',
        controller: 'myGoodsCtrl'
    })
    .otherwise({
        redirectTo: '/'
    })
}])
