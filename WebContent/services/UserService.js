app.factory('UserService',function($http)
{
	
	var  BASSE_URL="http://localhost:8082/backend2";
	
    var userService={}
    
    userService.registerUser = function(user){
    	
    	console.log(user)
    	return $http.post(BASSE_URL +"/registration",user)
    }
    
    userService.login=function(user){
    	return $http.post(BASSE_URL +"/login",user)
    }
 


userService.logout=function(user){
	return $http.get(BASSE_URL +"/logout",user)

}
/*
userService.login=function(user){
	return $http.post(BASSE_URL +"/home",user)
}*/

    
return userService;
})