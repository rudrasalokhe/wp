var app = angular.module("myApp", []);


app.controller("myController", ['$scope', function($scope){
    $scope.movies = [{
        name: "KICK", 
        genre: "chapri", 
        release : "2025"
    },
    {
        name: "War", 
        genre: "action", 
        release : "2022"
    },
    {
        name: "Titanic", 
        genre: "romance", 
        release : "2019"
    },
    {
        name: "Titanic", 
        genre: "romance", 
        release : "2019"
    },
    {
        name: "Titanic", 
        genre: "romance", 
        release : "2019"
    }
    ,{
        name: "Titanic", 
        genre: "romance", 
        release : "2019"
    }
    ]
}])