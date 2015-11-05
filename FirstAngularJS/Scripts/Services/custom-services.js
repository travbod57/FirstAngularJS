var myApp = angular.module('customServiceExamples', []);

myApp.controller('customServiceController', ['$scope', '$log', 'notify', function ($scope, $log, notify) {
    $scope.callNotify = function (msg) {
        notify.notify(msg);
        $log.log('notify clicked');
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