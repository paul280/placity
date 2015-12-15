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
        "href": "#/Profil",
        "class": "btn btn-primary menuButton"
    },
    {
        "value": "Abmelden",
        "href": "#/Abmelden",
        "class": "btn btn-primary menuButton",
        "ng-click": "beep(1)"
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
        "href": "#/RouteOnline",
        "class": "btn btn-primary menuButton",
        "ng-click": "$scope.vibe()"
    },
    {
        "value": "lokale Routen",
        "href": "#/RouteLokal",
        "class": "btn btn-primary menuButton",
        "ng-click": "vibe()"
    },
    {
        "value": "RoutenID",
        "href": "#/RouteId",
        "class": "btn btn-primary menuButton"
    },
    {
        "value": "BullshitTaste",
        "href": "",
        "class": "btn btn-primary menuButton"
    }
];

controllers.buttons.options = [
    {
        "value": "Standort",
        "href": "#/Standort",
        "class": "btn btn-primary menuButton"
    }
]

console.log(controllers.buttons);

controllers.controller("indexCtrl",['$scope', function ($scope) {
    //deviceready hier noch nicht unbedingt gefeuert
    $scope.text = "text, junge";
    
    $scope.buttons = controllers.buttons.hauptmenu;
 //   console.log($scope.text);
    //console.log(navigator.vibrate);
    //navigator.vibrate(10000);
    $scope.beep = function () {
        navigator.notification.beep(1);
    };
    $scope.vibe = function () {
        navigator.vibrate(292);
    };
  
}]);

controllers.controller("routenCtrl",['$scope' ,function ($scope) {
    $scope.buttons = controllers.buttons.routen;
   // console.log(JSON.stringify(controllers.buttons));
    
    navigator.vibrate(292);
    $scope.beep = function () {
        navigator.notification.beep(1);
    };
    $scope.vibe = function () {
        navigator.vibrate(292);
    };


}]);

controllers.controller("optionsCtrl", ['$scope', function ($scope) {
    $scope.buttons = controllers.buttons.options;
}]);

controllers.controller("standortCtrl", ['$scope', function ($scope) {
   

    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    var onSucces = function (position) {
        navigator.notification.alert('Latitude: ' + position.coords.latitude + '\n' +
          'Longitude: ' + position.coords.longitude + '\n' +
          'Altitude: ' + position.coords.altitude + '\n' +
          'Accuracy: ' + position.coords.accuracy + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
          'Heading: ' + position.coords.heading + '\n' +
          'Speed: ' + position.coords.speed + '\n' +
          'Timestamp: ' + position.timestamp + '\n');
    };
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        navigator.notification.alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };

    $scope.getPos = function () {
        console.log("vor");
        navigator.geolocation.getCurrentPosition(onSucces, onError);
        console.log(navigator.geolocation.getCurrentPosition(onSucces, onError));
        console.log(onSucces);
        console.log("nach");
    };

}]);
var faxen = {};
