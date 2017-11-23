angular.module('ExampleApp', ['angular-cron-gen'])
    .controller('ExampleCtrl', ['$scope', function ($scope) {
        $scope.cronExpression = '0 0 0/1 1/1 * *';
        $scope.cronOptions = {
        };
        $scope.isCronDisabled = false;
    }]);
