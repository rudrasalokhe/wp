var app = angular.module("myApp",[]);
app.controller("myController", ['$scope', function($scope){
    $scope.names = [
        {
            fname:"Priya", 
            lname:"sharma",
            age:19
        },
        {
            fname:"Arun", 
            lname:"Varun",
            age:23
        },
        {
            fname:"anahita", 
            lname:"Karanjia",
            age:16
        },
    ]
}])