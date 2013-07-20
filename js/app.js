var app = angular.module('PhoneWordApp',['phoneKeyBoardApp']);


app.config(function($routeProvider)
{
	$routeProvider.when("/home", {templateUrl:"partials/home.html"});
	$routeProvider.when("/whatis", {templateUrl:"partials/whatis.html"});
	$routeProvider.when("/examples", {templateUrl:"partials/examples.html"});
	$routeProvider.when("/about", {templateUrl:"partials/about.html"});
    $routeProvider.when("/more", {templateUrl: "partials/more.html"});
    $routeProvider.otherwise({redirectTo: '/home'});
});


app.controller('PhoneWordsCtrl',function($scope)
{
	$scope.FamousPhoneWords = [
		{ phoneword : '1-800-FED-INFO', desc : 'USA National Contact Center'},
		{ phoneword : '1800-MY-APPLE', desc : 'Official Apple phone number'},
		];
});


var phoneKeyBoardApp = angular.module('phoneKeyBoardApp',[]);

phoneKeyBoardApp.filter('ChangeToPhoneNumber', ['PhoneKeyBoard', function(PhoneKeyBoard)  
{
    return function(input) 
    {	
    	var out = "";
    	if(input!==undefined && input !== null && input != "")
    	{				    		
    		for (var i = 0; i < input.split('').length; i++) 
    		{
    			isNaN(input[i]) == true ? 
    			( out += PhoneKeyBoard.EquvalentNumber(input[i]) ) : 
    			( input[i] !==' ' ? out += input[i] : out+= ' '  ) ;
			}
    	}
    	else
    	{
    		out = "Enter a phoneword above"
    	}
    	return out.replace(/^\s+|\s+$/g, '');;				    	
    };
}]);
phoneKeyBoardApp.factory('PhoneKeyBoard', function()
{
    return  {
	EquvalentNumber: function(character)
        {
        
        	switch(character.toUpperCase())
			{

				case 'A': case'B': case'C':
					return '2';
					break;
				case 'D': case'E': case'F':
					return '3';
					break;
				case 'G': case'H': case'I':
					return '4';
					break;
				case 'J': case'K': case'L':
					return '5';
					break;
				case 'M': case'N': case'O':
					return '6';
					break;
				case 'P': case'Q': case'R': case'S':
					return '7';
					break;
				case 'T': case'U': case'V':
					return '8';
					break;
				case 'W': case'X': case'Y': case'Z':
					return '9';
					break;
				case '-':
					return ' - ';
					break;
				default:
					break;
			}
    		return '';
        }
    }               
});	