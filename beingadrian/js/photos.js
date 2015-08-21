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

// initiate function

function createPhotoDiv(divId) {

    var div = "<div class=\"photo-thumbnail zeroed\"><a href=\"assets/photos/" + divId + ".jpg" + "\"><div id=\"" + divId + "\" class=\"thumbnail-container zeroed horizontally-centered\"></div></a></div>";

    $("#photos-wrapper").append(div)

}

$(document).ready(function() {

    for (var i in photosArray) {
        createPhotoDiv(photosArray[i])
    };

});
