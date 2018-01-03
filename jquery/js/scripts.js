var address = "http://api.icndb.com/jokes/random";
var $button = $("#get-joke").click(function() {
	getJoke();
});

$(document).ready(function() {

	getJoke();
});

function getJoke () {
	var $paragraph = $("#joke");
	$.ajax({
		method: "GET",
		url: address,
		success: function(res) {
			$paragraph.text(res.value.joke);
		}

	});
}