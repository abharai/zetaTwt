var myApp = angular.module("myApp",[]);

myApp.controller("myController",["$scope","$http", "$sce",function($scope,$http,$sce){
	$http.get('json/twitter.json').success(function(data) {
    $scope.profile = data;
	
	 $scope.trustSrc = function(src) {
		return $sce.trustAsResourceUrl(src);
	};
});
}]);