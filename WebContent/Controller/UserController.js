app.controller('UserController',function(UserService,$scope,$location,$rootScope,$cookieStore)
        {
    
    $scope.register=function()
   {
    	console.log("register....")
    	UserService.registerUser($scope.user).then(function(response)
        {
            $scope.message="Registered successfully..... Please Login...."
                console.log("done")
                
                $location.path('/login')
        }, function(response)
        {
            $scope.error=response.data;
            $location.path('/register')
        })
    
    }
    
    $scope.login=function(){
    console.log("login method start")
		UserService.login($scope.user).then(function(response){//200,User
			console.log("login start")
			$rootScope.currentUser=response.data
			$cookieStore.put('currentuser',response.data)
			$location.path('/')
		},function(response){//401,500....
			if(response.status==401){
				$scope.error=response.data//errorClazz in JSON fmt
				$location.path('/login')
			}
			
			
			
		})
	}
	

	$scope.logout=function(){
		UserService.logout($scope.user).then(function(response){//200,User
			console.log("logout start")


	     	delete $rootScope.currentUser
				$cookieStore.remove("currentUser")
				$location.path('/login')
		},function(response){//401,500....
			if(response.status==401){
				$scope.error=response.data//errorClazz in JSON fmt
				$location.path('/login')
			}
			
			
			
		})
	}	

        })
