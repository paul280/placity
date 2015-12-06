var controllers = angular.module('Controllers', []);

controllers.buttons = {};
controllers.buttons.hauptmenu = [
    {
        "value": "Ergebnisse",
        "href": "#/Ergebnisse",
        "class": "btn btn-primary menuButton"
    },
    {
        "value": "Routen",
        "href": "#/Routen",
        "class": "btn btn-primary menuButton"
    },
    {
        "value": "Optionen",
        "href": "#/Optionen",
        "class": "btn btn-primary menuButton"
    },
    {
        "value": "Profil",
        "href": "#/",
        "class": "btn btn-primary menuButton"
    },
    {
        "value": "Abmelden",
        "href": "#/",
        "class": "btn btn-primary menuButton"
    }
];

controllers.buttons.routen = [
    {
    "value": "QR-Code scannen",
    "href": "#/QrScan",
    "class": "btn btn-primary menuButton"
},
    {
        "value": "Route online suchen",
        "href": "#/routeOnline.html",
        "class": "btn btn-primary menuButton"
    },
    {
        "value": "lokale Routen",
        "href": "#/routeLokal.html",
        "class": "btn btn-primary menuButton"
    },
    {
        "value": "RoutenID",
        "href": "#/routeID.html",
        "class": "btn btn-primary menuButton"
    }
];

controllers.controller("indexCtrl", function ($scope) {
    $scope.text = "text, nigger";
    $scope.buttons = controllers.buttons.hauptmenu;
});

controllers.controller("routenCtrl", function ($scope) {
    $scope.buttons = controllers.buttons.routen;
});