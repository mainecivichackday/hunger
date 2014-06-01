var map = L.map('map', {
	center: new L.LatLng(45, -69.3),
	zoom: 7,
	layers: new L.tileLayer('http://a.tiles.mapbox.com/v3/jacques.map-612s2qsj/{z}/{x}/{y}.png')
});

var markerOptions = {
	radius: 5,
	fillColor: "#ff0000",
	color: "#ff0000",
	weight: 1,
	opacity: 0.8,
	fillOpacity: 0.6
};

$.getJSON("./data/addresses.geojson", function(data) {
	var geojson = L.geoJson(data, {
		pointToLayer: function(feature, latlng) {
			return L.circleMarker(latlng, markerOptions);
		},
		onEachFeature: function (feature, layer) {
			layer.bindPopup(feature.properties.Enroll);
		}
	}).addTo(map);
});
