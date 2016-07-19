var javimunoz = angular.module('javimunoz', []);

javimunoz.directive('javiTitle', function(){
	return {
		restrict: 'E',
		template: function(){
			return '<title>Javi Mu&ntilde;oz - Website</title>';
		}
	}
});