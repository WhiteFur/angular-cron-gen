angular.module('ExampleApp', ['angular-cron-gen'])
    .controller('ExampleCtrl', ['$scope', function ($scope) {
        $scope.cronExpression = '0 9 0 * * *';
        $scope.cronOptions = {
        };
        $scope.isCronDisabled = false;
    }]);
