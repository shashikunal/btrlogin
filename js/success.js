myApp.controller("successCtr" , function($scope , myService ,$location) {
    $scope.message = "welcome to success page1";

    $scope.logout = function(){
        myService.logoutUser();
        
      };


      $scope.username = myService.getUser();
      if(!$scope.username){
        $location.path("/login");
      };
    
    
});