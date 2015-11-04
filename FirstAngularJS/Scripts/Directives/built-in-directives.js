var myApp = angular.module('builtInDirectiveExamples', []);

myApp.controller('builtInController', ['$scope', '$http', function ($scope, $http) {

    $scope.name = 'Alex';

    $scope.countries = [{ Name: "UK", Population: 15000 }, { Name: "France", Population: 43000 }, { Name: "Germany", Population: 23000 }];

    $scope.show = true;

    $scope.changeShowHide = function () {

        $scope.show = !$scope.show;
    };

    $scope.disableGetViaAJAX = false;

    $scope.GetViaAJAX = function () {

        $scope.disableGetViaAJAX = true;

        $http.get("http://www.thinkbackpacking.com/Slim/destinations")
                .success(function (data) {
                    alert('success: ' + data.length);
                })
                .then(function successCallback(response) {
                    alert('then');
                    $scope.disableGetViaAJAX = false;
                }, function errorCallback(response) {
            });
    }

    $scope.switchedValue = "B";

}]);