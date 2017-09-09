var express = require('express');
var app = express();

// use that public folder (static middleware)
app.use(express.static('public'));

// route for /cities - do AJAX for html injection
var someCities = {"Providence": "Rhode Island",
									"Austin": "Texas",
									"Melbourne": "Australia",
									"Detroit": "Michegan",
									"Marseille": "France",
									"Woonsocket": "Rhode Island",
									"Accra": "Ghana",
									"Coventry": "Rhode Island",
									"Cordoba": "Argentina",
									"Edinburgh": "Scotland"};

app.get('/cities', function(request, response){
	if (request.query.limit > 0) {
		if (request.query.limit > Object.keys(someCities).length) {
			send.status(401);
		}
		response.json(Object.keys(someCities).slice(0, request.query.limit));
	} else {
		response.json(someCities);
	}
});

// 2nd route - returns state from the relevant key-value pair (city-state)
app.get('/cities/:city', function(request, response){
	var req_city = request.params.city.lower();
	response.json(req_city);
	var state = someCities[];
	if (!state) {
		// state not found
		response.status(404).json('No description found for ' + request.params.city);
	} else {
		response.json(state);
	}
});

// serving up fresh HTML on port 8000
app.listen(8000, function () {
	console.log("Serving up HTML on Port 8000");
});
