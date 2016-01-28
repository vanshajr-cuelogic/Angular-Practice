app.directive('blogInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directive/blog_directive.html' 
  }; 
});