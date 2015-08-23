/* PHOTOS.JS */

// fetch pictures

var photosArray = [
    "backshot",
    "bean",
    "boats-night-bw",
    "cathedral",
    "chicago-alley",
    "chicago-front",
    "ferris-wheel-landscape",
    "green-smoke",
    "marinabay-rose",
    "golden-gate",
    "plants-golden-gate",
    "natural-museum",
    "observing-the-penguins",
    "oxford-street",
    "perspective-trees",
    "ping-ping",
    "rowing",
    "shadow",
    "submerged",
    "sun-street-bw",
    "tree-dark",
    "tree1",
    "trump",
    "vilde",
    "yellow-greyscale1",
];

// main

$(document).ready(function() {

    for (var i in photosArray) {
        createPhotoDiv(photosArray[i])
    };

    // lightbox
    $(".thumbnail-container").click(function() {
        var elementId = this.id;
        showLightboxWithId(elementId);
    });

    $("#close-btn").click(function() {
        $(".lightbox-bg").css("visibility", "hidden");
    });

});


// initiate function

function createPhotoDiv(divId) {

    var div =   "<div class=\"photo-thumbnail zeroed\">\
                    <div id=\"" + divId + "\" class=\"thumbnail-container zeroed horizontally-centered hideme\"></div>\
                </div>";

    $("#photos-wrapper").append(div);

}

// lightbox

function showLightboxWithId(id) {

    var path = "assets/photos/" + id + ".jpg";
    $(".lightbox-img").attr("src", path);
    $(".lightbox-bg").css("visibility", "visible");

};
