/* ERROR404.JS */

$(window).load(function() {

    showError404();

});


function showError404() {

	$("#error404").typed({
		strings: ["404"],
        typeSpeed: 400,
        startDelay: 600,
		showCursor: true
	});

};
