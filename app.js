var express = require('express');
var app = express();

// use that public folder (static middleware)
app.use(express.static('public'));

// route for /cities - do AJAX for html injection
app.get('/cities', function(request, response){
	var someCities = ["Providence", "Austin", "Melbourne", "Detroit", "Marseille", "Woonsocket", "Accra", "Coventry", "Cordoba", "Oslo"];
	if (request.query.limit > 0) {
		if (request.query.limit > someCities.length) {
			send.status(401);
		}
		response.json(someCities.slice(0, request.query.limit));
	} else {
		response.json(someCities);
	}
});

// serving up fresh HTML on port 8000
app.listen(8000, function () {
	console.log("Serving up HTML on Port 8000");
});
