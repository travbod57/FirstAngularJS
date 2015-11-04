var myApp = angular.module('customServiceExamples', []);

myApp.controller('customServiceController', ['$scope', 'notify', function ($scope, notify) {
    $scope.callNotify = function (msg) {
        notify.notify(msg);
    };
}]);

myApp.factory('notify', ['$window', function (win) {
    var msgs = [];

    var notify = function (msg) {
        msgs.push(msg);
        if (msgs.length == 3) {
            win.alert(msgs.join("\n"));
            msgs = [];
        }
    };

    return {
        notify: notify
    }
}]);