var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	
	var firstPageState = {
		name : 'firstPageState',
		url : '/',
		templateUrl : 'view/firstPage.html'
	}

	$stateProvider.state(firstPageState);
	$urlRouterProvider.otherwise('/');
})