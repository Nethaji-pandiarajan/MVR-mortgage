
var primary = {
	"thirtyYear" : {
		"rate": "5.999%",
		"points": "0.000%",
		"apr": "6.002%"
	},
	"twentyYear" : {
		"rate": "5.999%",
		"points": "0.000%",
		"apr": "6.002%"
	},
	"fifteen" :{
		"rate": "5.999%",
		"points": "0.000%",
		"apr": "6.002%"
	},
	"tenYear" : {
		"rate": "5.999%",
		"points": "0.000%",
		"apr": "6.002%"
	},
	"sevenYear" : {
		"rate": "5.999%",
		"points": "0.000%",
		"apr": "6.002%"
	},
	"fiveYear" : {
		"rate": "5.999%",
		"points": "0.000%",
		"apr": "6.002%"
	}
}

$(document).ready(function(){
    var thirtyYrRateP = primary.thirtyYear.rate;
    var thirtyYrPointsP = primary.thirtyYear.points;
    var thirtyYrAPRP = primary.thirtyYear.apr;

    $('#thirtyYrRateP').val(thirtyYrRateP);
    $('#thirtyYrPointsP').val(thirtyYrPointsP);
    $('#thirtyYrAPRP').val(thirtyYrAPRP);

   

});

function changeVal(){
    primary.thirtyYear.rate = $('#thirtyYrRateP').val();
    primary.thirtyYear.points = $('#thirtyYrPointsP').val();
    primary.thirtyYear.apr = $('#thirtyYrAPRP').val();
}