var placity = angular.module("placity", ['ngRoute', 'Controllers', 'ui.bootstrap' ]);

placity.config(function ($routeProvider) {
    $routeProvider
    .when('/', { templateUrl: 'views/hauptmenu.html', controller: 'indexCtrl' })
    .when('/Optionen', { template: 'Über unsere Pizzeria' })
    .when('/Routen', { templateUrl: 'views/routen.html', controller: 'routenCtrl'})
    .otherwise({ redirectTo: '/' });

});

//placity.controller("indexCtrl", function ($scope) {
//    $scope.text = "text, nigger";
//    $scope.buttons = ["Ergebnisse", "Routen", "Optionen", "Profil", "Abmelden"];
//});