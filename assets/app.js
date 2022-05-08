let map;
var farm_main_plot_polygon;

function initMap() {

	const house_cords = {
		lat: 8.77721105135935,
		lng: 77.46167218773766
	}
	const farm_center_cords = {
		lat: 8.776286,
		lng: 77.462873,
	}
	const map = new google.maps.Map(document.getElementById("map"), {
		center: farm_center_cords,
		zoom: 18,
		mapTypeId: 'satellite'
	});
	const marker = new google.maps.Marker({
		position: house_cords,
		map: map,
		title: "Swathy Farms",
	});
	farm_main_plot_cords = [
		{ lat: 8.7792741,	lng: 77.4629707},
		{ lat: 8.7793431,	lng: 77.462478},
		{ lat: 8.7790412,	lng: 77.4618465},
		{ lat: 8.7785458,	lng: 77.461278},
		{ lat: 8.777510,	lng: 77.460259},
		{ lat: 8.7776061,	lng: 77.4598985},
		{ lat: 8.7781339,	lng: 77.4599167},
		{ lat: 8.778667,	lng: 77.4599},
		{ lat: 8.778761,	lng: 77.459392},
		{ lat: 8.7778585,	lng: 77.4594066},
		{ lat: 8.7777379,	lng: 77.459397},
		{ lat: 8.7776824,	lng: 77.4593913},
		{ lat: 8.7776164,	lng: 77.4593772},
		{ lat: 8.777564,	lng: 77.4593677},
		{ lat: 8.7775306,	lng: 77.4593622},
		{ lat: 8.7775117,	lng: 77.4593726},
		{ lat: 8.7774897,	lng: 77.4593881},
		{ lat: 8.7772428,	lng: 77.4599479},
		{ lat: 8.7771974,	lng: 77.4599646},
		{ lat: 8.7771769,	lng: 77.4599844},
		{ lat: 8.7771499,	lng: 77.4599881},
		{ lat: 8.7770507,	lng: 77.4600222},
		{ lat: 8.776586,	lng: 77.4599128},
		{ lat: 8.7762823,	lng: 77.4597959},
		{ lat: 8.7761008,	lng: 77.4598225},
		{ lat: 8.7759193,	lng: 77.4598545},
		{ lat: 8.7757252,	lng: 77.459908},
		{ lat: 8.7755629,	lng: 77.4599802},
		{ lat: 8.7753179,	lng: 77.4601083},
		{ lat: 8.7750862,	lng: 77.4602497},
		{ lat: 8.7748877,	lng: 77.4603657},
		{ lat: 8.774713,	lng: 77.46042},
		{ lat: 8.774557,	lng: 77.4604598},
		{ lat: 8.7744036,	lng: 77.4605131},
		{ lat: 8.7738412,	lng: 77.4608505},
		{ lat: 8.7736932,	lng: 77.4610179},
		{ lat: 8.7735266,	lng: 77.4611531},
		{ lat: 8.7724789,	lng: 77.4616456},
		{ lat: 8.7724372,	lng: 77.4617103},
		{ lat: 8.7721816,	lng: 77.4619107},
		{ lat: 8.7722507,	lng: 77.4620059},
		{ lat: 8.7722466,	lng: 77.4622402},
		{ lat: 8.7723056,	lng: 77.4621971},
		{ lat: 8.7723606,	lng: 77.4621098},
		{ lat: 8.7724736,	lng: 77.46212},
		{ lat: 8.772645,	lng: 77.4623341},
		{ lat: 8.7732289,	lng: 77.4627938},
		{ lat: 8.772983,	lng: 77.463514},
		{ lat: 8.7751345,	lng: 77.4644383},
		{ lat: 8.7748275,	lng: 77.4650916},
		{ lat: 8.7748001,	lng: 77.465144},
		{ lat: 8.7747665,	lng: 77.4651657},
		{ lat: 8.774718,	lng: 77.4651823},
		{ lat: 8.7746686,	lng: 77.4651914},
		{ lat: 8.7746201,	lng: 77.4651827},
		{ lat: 8.7745815,	lng: 77.4652459},
		{ lat: 8.7747083,	lng: 77.4654258},
		{ lat: 8.7757026,	lng: 77.4655982},
		{ lat: 8.7767102,	lng: 77.4657638},
		{ lat: 8.7767531,	lng: 77.4657409},
		{ lat: 8.7767938,	lng: 77.4656711},
		{ lat: 8.7771101,	lng: 77.4645081},
		{ lat: 8.7775455,	lng: 77.4638782},
		{ lat: 8.7776178,	lng: 77.4638652}
	];
	farm_main_plot_polygon = new google.maps.Polygon({
		paths: farm_main_plot_cords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.25,
		// editable: true
	});

	farm_main_plot_polygon.setMap(map);

	// google.maps.event.addListener(farm_main_plot_polygon, 'set_at', dump_info);
	// google.maps.event.addListener(farm_main_plot_polygon, 'insert_at', dump_info); 
	google.maps.event.addListener(farm_main_plot_polygon.getPath(), "insert_at", getPolygonCoords);
	google.maps.event.addListener(farm_main_plot_polygon.getPath(), "remove_at", getPolygonCoords);
	google.maps.event.addListener(farm_main_plot_polygon.getPath(), "set_at", getPolygonCoords);
}

function getPolygonCoords() {
	var len = farm_main_plot_polygon.getPath().getLength();
	var points = [];
	for (var i = 0; i < len; i++) {
		point = farm_main_plot_polygon.getPath().getAt(i).toUrlValue(7).split(',');
		points.push({ lat: point[0], lng: point[1] });
	}
	console.log(points);
}


window.initMap = initMap;
