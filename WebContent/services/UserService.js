app.factory('UserService',function($http)
{
	
	var  BASSE_URL='http://localhost:8181/CollabBackEnd';
	
    var userService={}
    
    userService.registerUser = function(user){
    	return $http.post(BASSE_URL+'/signUp',user)
    }
    
    userService.login=function(user){
    	return $http.post(BASSE_URL +"/login",user)
    }
 


userService.logout=function(user){
	return $http.get(BASSE_URL +"/logout",user)

}

    
return userService;
})