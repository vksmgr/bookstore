var myApp = angular.module('myApp');
console.log("File Loaded");
myApp.controller('BooksController',['$scope', '$http', '$location', '$routeParams',function ($scope, $http, $location, $routeParams) {
    console.log('Books Controller Loaded');
    $scope.getBooks = function () {
        $http.get('/api/books').success(function (response) {
            $scope.books = response;
        });
    }
}]);