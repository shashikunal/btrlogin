myApp.controller("registerCtr" , function($scope , $firebaseAuth , $location){
    $scope.signUp = function(){
        var username = $scope.user.email;
        var password = $scope.user.password;


        var auth = $firebaseAuth();

        if(username && password){
            auth.$createUserWithEmailAndPassword(username , password).then(function(){
                console.log("successfully created user");
            }).catch(function(err){
                console.log(err);
                $scope.errMsg = true;
                $scope.errorMessage = err.message;
            });
        };

    

    } //register


    // signin
    $scope.login = function() {
        $scope.message = "Welcome " + $scope.user.email;
        var username = $scope.user.email;
        var password = $scope.user.password;
        var auth = $firebaseAuth();
    
        auth.$signInWithEmailAndPassword(username , password).then(function(){
          console.log("succusfully logged in");
            $location.path("/success");
        }).catch(function(err){
          console.log(err);
          $scope.errMsg = true;
          $scope.errorMessage = err.message;
        });
    }; //login

});