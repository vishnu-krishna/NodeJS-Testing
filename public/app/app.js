angular.module('app', []);
angular.module('app').controller('testCtrl', function ($scope) {
    $scope.jobs = [{
        title: 'Sales Person', description: 'A Custom sales Person'
    },
        {title: 'Accountant', description: 'A Custom Accountant'}, {
            title: 'Software Engineer', description: 'A custom Software Engineer'
        }]
})