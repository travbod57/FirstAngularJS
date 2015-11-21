var myApp = angular.module('customDirectiveExamples', []);

myApp.controller('customController', ['$scope', function ($scope) {
    $scope.customers = [{ Name: "Michael", Address: "8 liskeard Close" }, { Name: "Alex", Address: "6 Kempton Lodge" }, { Name: "Rachel", Address: "6 Haylett Gardens" }];
    
    $scope.Naomi = { Name: "Naomi", Address: "7 Morden Way" };
    $scope.Tess = { Name: "Tess", Address: "12 Goodwood House" };

    $scope.showDialog = true;
}]);


myApp.directive('myCustomerNgr', function () {
    return {
        //restrict: 'AEC', // 'A' - only matches attribute name, 'E' - only matches element name, 'C' - only matches class name
        template: 'Name: {{customer.Name}}, Address: {{customer.Address}}'
        //templateUrl: function (elem, attr) {
        //    return attr.url + '/CustomerTemplate.html';
        //}
    };
});

myApp.directive('myCustomer', function () {
    return {
        restrict: 'AEC', // 'A' - only matches attribute name, 'E' - only matches element name, 'C' - only matches class name
        scope: {
            customerInfo: '=info' // '=' if the attribute name on the element was also 'customerInfo', @ to use the evaluated value of an expresson rather than the parent's scope value
        },
        template: 'Name: {{customerInfo.Name}}, Address: {{customerInfo.Address}}'
    };
});

myApp.directive('myCustomerLink', function () {

    var link = function (scope, element, attrs, controller, transcludeFn) {

        element.css("color", "Red");
    }

    return {
        restrict: 'AEC', // 'A' - only matches attribute name, 'E' - only matches element name, 'C' - only matches class name
        scope: {
            customerInfo: '=info'
        },
        template: 'Name: {{customerInfo.Name}}, Address: {{customerInfo.Address}}',
        link: link
    };
});

myApp.directive("modalShow", function () {
    return {
        restrict: "A",
        scope: {
            modalVisible: "="
        },
        link: function (scope, element, attrs) {

            //Hide or show the modal
            scope.showModal = function (visible) {
                if (visible) {
                    element.modal("show");
                }
                else {
                    element.modal("hide");
                }
            }

            //Check to see if the modal-visible attribute exists
            if (!attrs.modalVisible) {

                //The attribute isn't defined, show the modal by default
                scope.showModal(true);

            }
            else {

                //Watch for changes to the modal-visible attribute
                scope.$watch("modalVisible", function (newValue, oldValue) {
                    scope.showModal(newValue);
                });

                //Update the visible value when the dialog is closed through UI actions (Ok, cancel, etc.)
                element.bind("hide.bs.modal", function () {
                    scope.modalVisible = false;
                    if (!scope.$$phase && !scope.$root.$$phase)
                        scope.$apply();
                });

            }

        }
    };

});