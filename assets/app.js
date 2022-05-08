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

	farm_vayal_plot_cords = [
		{ lat: 8.7791087,	lng: 77.4593409 },
		{ lat: 8.7790584,	lng: 77.4591858 },
		{ lat: 8.77902, 	lng: 77.4590687 },
		{ lat: 8.7789756,	lng: 77.4589766 },
		{ lat: 8.7789719,	lng: 77.4588796 },
		{ lat: 8.7789661,	lng: 77.4588378 },
		{ lat: 8.7789115,	lng: 77.4587606 },
		{ lat: 8.7788299,	lng: 77.4586723 },
		{ lat: 8.7787098,	lng: 77.4585667 },
		{ lat: 8.7784435,	lng: 77.4583637 },
		{ lat: 8.7783939,	lng: 77.4582796 },
		{ lat: 8.7783437,	lng: 77.4580789 },
		{ lat: 8.778296,	lng: 77.4579919 },
		{ lat: 8.7782033,	lng: 77.4579236 },
		{ lat: 8.7780921,	lng: 77.4578004 },
		{ lat: 8.7778781,	lng: 77.4580414 },
		{ lat: 8.7777658,	lng: 77.4581431 },
		{ lat: 8.7775528,	lng: 77.4582528 },
		{ lat: 8.7774286,	lng: 77.4584189 },
		{ lat: 8.7773521,	lng: 77.4585367 },
		{ lat: 8.7772862,	lng: 77.4586619 },
		{ lat: 8.7771938,	lng: 77.458787 },
		{ lat: 8.7770291,	lng: 77.4589854 },
		{ lat: 8.776883,	lng: 77.4589612 },
		{ lat: 8.7754576,	lng: 77.4589485 },
		{ lat: 8.7749144,	lng: 77.4593282 },
		{ lat: 8.774595,	lng: 77.4594379 },
		{ lat: 8.7744592,	lng: 77.4595343 },
		{ lat: 8.7743393,	lng: 77.4596468 },
		{ lat: 8.773849,	lng: 77.4600673 },
		{ lat: 8.7735019,	lng: 77.4606389 },
		{ lat: 8.7733568,	lng: 77.460879 },
		{ lat: 8.7733045,	lng: 77.4609449 },
		{ lat: 8.7731993,	lng: 77.461017 },
		{ lat: 8.7731043,	lng: 77.4611241 },
		{ lat: 8.7729733,	lng: 77.461226 },
		{ lat: 8.7727682,	lng: 77.4613536 },
		{ lat: 8.7725524,	lng: 77.4615582 },
		{ lat: 8.772689,	lng: 77.4615026 },
		{ lat: 8.7729787,	lng: 77.4613742 },
		{ lat: 8.773163,	lng: 77.4612783 },
		{ lat: 8.7733115,	lng: 77.4612098 },
		{ lat: 8.7735014,	lng: 77.4611181 },
		{ lat: 8.7736567,	lng: 77.4610031 },
		{ lat: 8.7737737,	lng: 77.4608536 },
		{ lat: 8.7739712,	lng: 77.4607276 },
		{ lat: 8.7744327,	lng: 77.4604518 },
		{ lat: 8.7748521,	lng: 77.4603186 },
		{ lat: 8.7754364,	lng: 77.4599877 },
		{ lat: 8.7757964,	lng: 77.4598277 },
		{ lat: 8.7762977,	lng: 77.4597447 },
		{ lat: 8.776529,	lng: 77.4598281 },
		{ lat: 8.7768377,	lng: 77.4599172 },
		{ lat: 8.7770521,	lng: 77.459964 },
		{ lat: 8.777163,	lng: 77.4599207 },
		{ lat: 8.7772124,	lng: 77.459904 },
		{ lat: 8.7772476,	lng: 77.4598061 },
		{ lat: 8.7772756,	lng: 77.4597364 },
		{ lat: 8.7773158,	lng: 77.4596427 },
		{ lat: 8.7773456,	lng: 77.4595732 },
		{ lat: 8.7773736,	lng: 77.4595147 },
		{ lat: 8.7774109,	lng: 77.4594486 },
		{ lat: 8.7774459,	lng: 77.4593781 },
		{ lat: 8.777476,	lng: 77.4593445 },
		{ lat: 8.7774931,	lng: 77.4593334 },
		{ lat: 8.7775248,	lng: 77.4593218 },
		{ lat: 8.7777605,	lng: 77.4593592 },
		{ lat: 8.7779883,	lng: 77.4593657 },
	];
	farm_vayal_plot_polygon = new google.maps.Polygon({
		paths: farm_vayal_plot_cords,
		strokeColor: "#0000FF",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#0000FF",
		fillOpacity: 0.25,
		// editable: true
	});
	farm_vayal_plot_polygon.setMap(map);

	farm_front_plot_cords = [
		{ lat: 8.7782406,	lng: 77.4642373 },
		{ lat: 8.7779574,	lng: 77.4641466 },
		{ lat: 8.7779314,	lng: 77.4641231 },
		{ lat: 8.7776223,	lng: 77.4640437 },
		{ lat: 8.7775965,	lng: 77.4640232 },
		{ lat: 8.7784143,	lng: 77.4635784 },
		{ lat: 8.7792082,	lng: 77.4631148 },
		{ lat: 8.7791432,	lng: 77.4636771 },
		{ lat: 8.7786541,	lng: 77.4636599 },
	];

	farm_front_plot_polygon = new google.maps.Polygon({
		paths: farm_front_plot_cords,
		strokeColor: "#00FF00",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#00FF00",
		fillOpacity: 0.25,
		// editable: true
	});
	farm_front_plot_polygon.setMap(map);

	[
		farm_main_plot_polygon,
		farm_vayal_plot_polygon,
		farm_front_plot_polygon,
	].forEach(polygon => {
		["insert_at", "remove_at", "set_at"].forEach(event => {
			google.maps.event.addListener(polygon.getPath(), event, function () {
				var len = polygon.getPath().getLength();
				var points = [];
				for (var i = 0; i < len; i++) {
					point = polygon.getPath().getAt(i).toUrlValue(7).split(',');
					points.push("{ lat: " + point[0] + ",\tlng: " + point[1] + " },");
				}
				console.log(points.join("\n"));
			});
		})	
	})
}




window.initMap = initMap;
