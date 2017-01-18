angular.module('serviceApp', [])

.directive('showErrors', function() {
    return {
      restrict: 'A',
      require: '^form',
      link: function (scope, el, attrs, formCtrl) {
        // find the text box element, which has the 'name' attribute
        var inputEl   = el[0].querySelector("[name]");
        // convert the native text box element to an angular element
        var inputNgEl = angular.element(inputEl);
        // get the name on the text box
        var inputName = inputNgEl.attr('name');
        
        // only apply the has-error class after the user leaves the text box
        inputNgEl.bind('blur', function() {
          el.toggleClass('has-error', formCtrl[inputName].$invalid);
        })
      }
    }
  })

.controller('serviceCtrl', function($scope){
  $scope.save = function() {
    if ($scope.userForm.$valid) {
      alert('User saved');
      $scope.reset();
    } else {
      alert("There are invalid fields");
    }
  };
  
  $scope.reset = function() {
    $scope.user = { name: '', email: '' };
  }


    
    $scope.url = 'views/bar.html';
    
    $scope.changeToBar = function(){
        $scope.url = 'views/bar.html';
    }
    $scope.changeToRolls = function(){
        $scope.url = 'views/rolls.html'
    }
});





