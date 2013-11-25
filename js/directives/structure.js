// D3 visualization
// TODO: D3 as a service

angular.module('panelApp').directive('batStructure', function () {
	return {
		restrict: 'E',
		terminal: true,
		scope: {
			val: '=val'
		},
		link: function (scope, element, attrs) {
			// Based on code from: http://mbostock.github.com/d3/talk/20111116/bundle.html

			// Initialize Element
			// ------------------
			var div = d3.select(element[0]);

			// Constants
			// ---------
			var w = 600,
				h = 600,
				rx = w / 2,
				ry = h / 2,
				m0,
				rotate = 0;

			// Helpers
			// -------

			// generate element ids that do not have '$'
			var sanitize = function (key) {
				return key.replace('$', 'dollar')
			}

			// TODO: refactor the data transformation to make it faster
			// For instance, build up the ideal structure in inject/degug.js
			var packages = {
				// Lazily construct the package hierarchy from class names.
				root: function(classes) {
					var map = {};

					// add "classes" with no dependencies
					var exist = {},
						toAdd = [];
					classes.forEach(function (cl) {
						exist[cl.name] = true;
					});
					classes.forEach(function (cl) {
						cl.imports.forEach(function (im) {
							if (!exist[im]) {
								toAdd.push(im);
								exist[im] = true;
							}
						});
					});
					toAdd.forEach(function (a) {
						classes.push({
							name: a,
							imports: []
						});
					});

					function find(name, data) {
						var node = map[name], i;
						if (!node) {
							node = map[name] = data || {name: name, children: []};
							if (name.length) {
								node.parent = find(name.substring(0, i = name.lastIndexOf(".")));
								node.parent.children.push(node);
								node.key = name.substring(i + 1);
							}
						}
						return node;
					}

					classes.forEach(function(d) {
						find(d.name, d);
					});

					return map[""];
				},

				// Return a list of imports for the given array of nodes.
				imports: function(nodes) {
					var map = {},
						imports = [];

					// Compute a map from name to node.
					nodes.forEach(function(d) {
						map[d.name] = d;
					});

					// For each import, construct a link from the source to target node.
					nodes.forEach(function(d) {
						if (d.imports) d.imports.forEach(function(i) {
							imports.push({source: map[d.name], target: map[i]});
						});
					});
					return imports;
				}
			};

			// Instantiate and Style D3 Objects
			// --------------------------------

			var cluster = d3.layout.cluster().
				size([360, ry - 120]).
				sort(function(a, b) { return d3.ascending(a.key, b.key); });

			var bundle = d3.layout.bundle();

			var line = d3.svg.line.radial().
				interpolate("bundle").
				tension(.85).
				radius(function(d) { return d.y; }).
				angle(function(d) { return d.x / 180 * Math.PI; });

			var svg = div.append("svg:svg").
				attr("preserveAspectRatio", "xMinYMin meet").
				attr("viewBox", [0, 0, w, h].join(' ')).
				attr("height", h).
				append("svg:g").
				attr("transform", "translate(" + rx + "," + ry + ")");

			// Render the data whenever "val" changes
			// --------------------------------------
			scope.$watch('val', function (newVal, oldVal) {

			});

		}
	};
});
