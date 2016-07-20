var javimunoz = angular.module('javimunoz', []);

javimunoz.directive('javiTitle', function(){
	return {
		restrict: 'E',
		template: function(){
			return '<title>Javi Muñoz - Website</title>';
		}
	}
});