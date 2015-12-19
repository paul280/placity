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
];

controllers.buttons.standort = [
    {
        "value": "Aktualisieren",
        "class": "btn btn-primary btn-sm",
      
    }
];

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
    var vm = this;
    vm.buttons = controllers.buttons.standort;
    vm.geolocation = ".......";
    vm.getPos = getPos;

    getPos();

    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    function onSucces(position) {
        vm.geolocation = 'Latitude: ' + position.coords.latitude + '\n' +
          'Longitude: ' + position.coords.longitude + '\n' +
          'Altitude: ' + position.coords.altitude + '\n' +
          'Accuracy: ' + position.coords.accuracy + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
          'Heading: ' + position.coords.heading + '\n' +
          'Speed: ' + position.coords.speed + '\n' +
          'Timestamp: ' + position.timestamp + '\n';
    };
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        vm.geolocation = 'code: ' + error.code + '\n' +
              'message: ' + error.message + '\n';
    };

    function getPos() {
        navigator.geolocation.getCurrentPosition(onSucces, onError);
    };
    
}]);


controllers.controller('ScanCtrl', ['$scope', function ($scope) {
    $scope.result = cordova.plugins.barcodeScanner.scan(onSucess, function (error) {
        return "Scanning failed: " + error ;
    });
    console.log($scope.result+"WAWSWAW");
   

    function onSucess(result) {
        console.log(result);
        console.log($scope.result);
        $scope.result = "We got a barcode\n" +
               "Result: " + result.text + "\n" +
               "Format: " + result.format + "\n" +
               "Cancelled: " + result.cancelled;
        //alert(vm.result);
        console.log($scope.result);
       // vm.result = "gaaaay!!!";
        //    console.log(vm.result);
        return $scope.result;
    };
    console.log($scope.result+"wwwwwwwwwwwwww");
}]);
