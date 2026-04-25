var app = angular.module("myApp", []);

app.controller("myShopping", ['$scope', function($scope){
    $scope.pizzaQty = null;
    $scope.pastaaQty = null;
    $scope.breadQty = null;
    $scope.sandQty = null;
    $scope.iceQty = null;
    $scope.showBill = false;
    $scope.totalBill = null;
    $scope.checkout = function(){
       $scope.totalBill = ($scope.pizzaQty * 500)+($scope.pastaaQty * 400)+($scope.breadQty * 100)+($scope.sandQty * 200)+($scope.iceQty * 85);
       $scope.showBill = true;
    }
}])