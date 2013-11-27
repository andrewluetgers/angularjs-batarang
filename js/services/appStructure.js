// Service for retrieving and caching application dependencies
angular.module('panelApp').factory('appStructure', function (chromeExtension, appContext) {

		var _depsCache = [];

		// clear cache on page refresh
		appContext.watchRefresh(function () {
			_depsCache = [];
		});

		return {
			get: function (callback) {
				(function() {chromeExtension.eval(function (window) {
						if (window.__ngDebug) {
							return window.__ngDebug.getStructure();
						}
					},
					function (data) {
						if (data) {
							_depsCache = data;
						}
						callback(_depsCache);
					});
				}());
			}
		}
	});
