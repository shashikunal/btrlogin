myApp.controller("registerCtr" , function($scope , $firebaseAuth){
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
});