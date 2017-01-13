angular.module('serviceApp', [])
.controller('serviceCtrl', function($scope){
    
    $scope.url = 'views/bar.html';
    
    $scope.changeToBar = function(){
        $scope.url = 'views/bar.html';
    }
    $scope.changeToRolls = function(){
        $scope.url = 'views/rolls.html'
    }
})