angular.module('panelApp').controller('StructureCtrl', function StructureCtrl($scope, appStructure) {
	$scope.$on('poll', function () {
		appStructure.get(function (struct) {
			$scope.$apply(function () {
				$scope.struct = struct;
			});
		});
	});
});
