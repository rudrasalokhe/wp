var app = angular.module("myApp", []);

app.controller("myController", ['$scope', function($scope){
    $scope.lool = false;
    $scope.validate = function(){
        $scope.lool = true;
    }
}])