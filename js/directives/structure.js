angular.module('panelApp').directive('batStructure', function () {
	return {
		restrict: 'E',
		terminal: true,
		scope: {
			modules: "=modules"
		},
		link: function ($scope, element, attrs) {

//			console.log(arguments);
//
//			var div = d3.select(element[0]);
//
//			var w = 600,
//				h = 600,
//				rx = w / 2,
//				ry = h / 2,
//				m0,
//				rotate = 0;
//
//
//			// generate element ids that do not have '$'
//			var sanitize = function (key) {
//				return key.replace('$', 'dollar');
//			}
//
//
//			// Instantiate and Style D3 Objects
//			// --------------------------------
//
////			var cluster = d3.layout.cluster().
////				size([360, ry - 120]).
////				sort(function(a, b) { return d3.ascending(a.key, b.key); });
////
////			var bundle = d3.layout.bundle();
////
////			var line = d3.svg.line.radial().
////				interpolate("bundle").
////				tension(.85).
////				radius(function(d) { return d.y; }).
////				angle(function(d) { return d.x / 180 * Math.PI; });
////
//
//
//
//			// based on http://maxdemarzi.com/2012/02/02/graph-visualization-and-neo4j-part-three/
//			var r1 = 960 / 2,
//				r0 = r1 - 120;
//
//			var fill = d3.scale.category20c();
//
//			var chord = d3.layout.chord()
//				.padding(.04)
//				.sortSubgroups(d3.descending)
//				.sortChords(d3.descending);
//
//			var arc = d3.svg.arc()
//				.innerRadius(r0)
//				.outerRadius(r0 + 20);
//
////			var svg = div.append("svg:svg").
////				attr("preserveAspectRatio", "xMinYMin meet").
////				attr("viewBox", [0, 0, w, h].join(' ')).
////				attr("height", h).
////				append("svg:g").
////				attr("transform", "translate(" + rx + "," + ry + ")");
//
//			var svg = div.append("svg")
//				.attr("width", r1 * 2)
//				.attr("height", r1 * 2)
//				.append("g")
//				.attr("transform", "translate(" + r1 + "," + r1 + ")");
//
//			/** Returns an event handler for fading a given chord group. */
//			function fade(opacity) {
//				return function(g, i) {
//					svg.selectAll("g path.chord")
//						.filter(function(d) {
//							return d.source.index != i && d.target.index != i;
//						})
//						.transition()
//						.style("opacity", opacity);
//				};
//			}
//
//			function draw(follows) {
//				var indexByName = {},
//					nameByIndex = {},
//					matrix = [],
//					n = 0;
//
//				function name(name) {
//					return name
//				}
//
//				// Compute a unique index for each name.
//				follows.forEach(function(d) {
//					d = name(d.name);
//					if (!(d in indexByName)) {
//						nameByIndex[n] = d;
//						indexByName[d] = n++;
//					}
//				});
//
//				// Construct a square matrix counting relationships.
//				follows.forEach(function(d) {
//					var source = indexByName[name(d.name)],
//						row = matrix[source];
//					if (!row) {
//						row = matrix[source] = [];
//						for (var i = -1; ++i < n;) row[i] = 0;
//					}
//					d.follows.forEach(function(d) { row[indexByName[name(d)]]++; });
//				});
//
//				chord.matrix(matrix);
//
//				var g = svg.selectAll("g.group")
//					.data(chord.groups)
//					.enter().append("g")
//					.attr("class", "group");
//
//				g.append("path")
//					.style("fill", function(d) { return fill(d.index); })
//					.style("stroke", function(d) { return fill(d.index); })
//					.attr("d", arc)
//					.on("mouseover", fade(.1))
//					.on("mouseout", fade(1));
//
//
//				g.append("text")
//					.each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
//					.attr("dy", ".35em")
//					.attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
//					.attr("transform", function(d) {
//						return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
//							+ "translate(" + (r0 + 26) + ")"
//							+ (d.angle > Math.PI ? "rotate(180)" : "");
//					})
//					.text(function(d) { return nameByIndex[d.index]; });
//
//				svg.selectAll("path.chord")
//					.data(chord.chords)
//					.enter().append("path")
//					.attr("class", "chord")
//					.style("stroke", function(d) { return d3.rgb(fill(d.source.index)).darker(); })
//					.style("fill", function(d) { return fill(d.source.index); })
//					.attr("d", d3.svg.chord().radius(r0));
//
//			}
//
//			d3.json("follows", draw);
//



			var i = 0;

			// Render the data whenever "val" changes
			// --------------------------------------
			$scope.$watch('modules.clusters', function (n, o) {
				console.log(n, o);
				var val = JSON.stringify(n);
				$(element).text((i++) + val);
//				alert("$scope.modules.clusters updated");
			}, true);


		}
	};
});
