app.directive('appInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directive/product_directive.html' 
  }; 
});




app.directive('blogInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directive/blog_directive.html'
  }; 
});




app.directive('nestInfo',function(){
	return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'js/directive/nest_directive.html',
    link : function(scope, element, attrs) {
      scope.buttonText = "Install",
      scope.installed = false,

      scope.download = function() {
        element.toggleClass('btn-active')
        if(scope.installed) {
          scope.buttonText = "Install";
          scope.installed = false;
        } else {
          scope.buttonText = "Uninstall";
          scope.installed = true;
        }
      }
    }
  }; 
});

