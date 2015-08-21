// Typed.js functionality

$(function() {
	$("#landing-typed").typed({
		strings: ["@^300beingadrian"],
		typeSpeed: 100,
		startDelay: 300,
		showCursor: true
	});
});


// Smooth scrolling

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// Pop-over

$(document).ready(function(){
    $('[data-toggle="footer-popover"]').popover({
        placement : 'top',
        html: 'true'
    });
});

// Hide-me

$(document).ready(function() {

    showWhenVisible("hideme");
    showWhenVisible("hideme-delayed");

    var typedArray = ["about-typed", "contact-typed"];

    for (var i in typedArray) {
        typeWhenVisible(typedArray[i]);
    };

});

function showWhenVisible(className) {

    var classId = "." + className;

    /* Every time the window is scrolled ... */
    $(window).scroll( function() {

        /* Check the location of each desired element */
        $(classId).each( function(i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ) {

                if (className == "hideme") {
                    $(this).animate({'opacity':'1'}, 500);
                } else if (className == "hideme-delayed") {
                    $(this).delay(4500).animate({'opacity':'1'}, 500);
                }

            }

        });

    });
};



function typeWhenVisible(elementName) {

    var elementId = "#" + elementName;

    var strings = {
        "about-typed": ["Adrian^200 Wisaksana"],
        "contact-typed": ["Nice to meet you.^700", "Say hello", "hello@beingadrian.com"]
    };

    var string = strings[elementName];

    /* Every time the window is scrolled ... */
    $(window).scroll( function() {

        /* Check the location of each desired element */
        $(elementId).each( function(i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ) {

                $(elementId).typed({
                    strings: string,
                    typeSpeed: 50,
                    startDelay: 100,
                    showCursor: true
                });

            }

        });

    });
};
