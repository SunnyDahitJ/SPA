var app = angular.module('myApp', [], ['ui.bootstrap']);
var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider.when('/', 
    {
        templateUrl: 'about.html',
        controller: 'FirstController'
    }).when('/about/:first/:lst',
    {
        templateUrl: 'about.html',
        controller: 'FirstController'
    })

    .when('/emp_details', {
        templateUrl: 'emp_details.html',
        controller: 'SecondController'
    })

    .when('/data', {
        templateUrl: 'data.html',
        controller: 'ThirdController'
    })

    .otherwise({
        redirectTo: '/'
    });
});


app.controller('FirstController', function($scope) {
    $scope.message = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, corporis! Nostrum consequuntur, aliquam qui incidunt id voluptate sit unde iste suscipit perferendis dolorum! Explicabo quos architecto eos excepturi! Reiciendis, velit necessitatibus ipsa dignissimos quo praesentium nemo recusandae ratione similique neque accusantium quaerat deserunt consequatur debitis optio labore placeat consequuntur. Quibusdam alias ut soluta. Alias, dolorem';

});


app.controller('SecondController', function($scope, $http) {
    $http.get('https://sunnydahitj.github.io/json/roaster.json')
        .success(function(response) {
            $scope.names = response.roaster;
        });
});

app.controller('ThirdController', function($scope, $http) {
    $http.get('https://sunnydahitj.github.io/json/roaster.json')
        .success(function(response) {
            $scope.names = response.roaster;
            $scope.rowlimit = 6;
        });
});