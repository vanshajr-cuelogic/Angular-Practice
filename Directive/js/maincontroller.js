
// 'nature' is JSON

app.controller('MainControllerDirective',['$scope',function($scope){
	$scope.nature = nature;
}]);



/********************/
app.directive('blogInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'view/nature.html'
  }; 
});

app.controller("array_directive_Controller",["$scope",function($scope){
	 $scope.blogs = nature;
}]);
/***********************/

