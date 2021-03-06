angular.module('panelApp').controller('StructureCtrl', function StructureCtrl($scope, appStructure) {

	$scope.vals = {
		modules: {
			struct: {},
			clusters: {},
			exclude: "tpl|template"
		}
	};

	function getModuleClusters(modules, exclude) {
		var clusters = {},
			matchRe = new RegExp(exclude + "", "i");

		_.each(modules, function(module, moduleName) {
			if (!exclude || (exclude && !moduleName.match(matchRe))) {
				var clusterName = moduleName.split(/[\.\-_\/]/)[0];
				var cluster = clusters[clusterName] || {};
				cluster[moduleName] = module;
				clusters[clusterName] = cluster;
			}
		});
		return clusters;
	}

	function update() {
		appStructure.get(function (_struct) {
			$scope.$apply(function () {
				$scope.vals.modules.struct = _struct;
				$scope.vals.modules.clusters = getModuleClusters(_struct.modules, $scope.vals.modules.exclude);
			});
		});
	}

	$scope.$watch("vals.modules.exclude", function() {
		$scope.vals.modules.clusters = getModuleClusters($scope.vals.modules.struct.modules, $scope.vals.modules.exclude);
		$scope.$apply();
	 });

	$scope.$on('poll2', update);
	update();
});
