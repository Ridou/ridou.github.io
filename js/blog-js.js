// On page load
$(window).load(columnHeight);

// On window resize
$(window).resize( function () {
    // Clear all forced column heights before recalculating them after window resize
    $("#leftcol").css("height", "");
    $("#centercol").css("height", "");
    $("#rightcol").css("height", "");
    columnHeight();
});

// Make columns 100% in height
function columnHeight() {
    // Column heights should equal the document height minus the header height and footer height
    var newHeight = $(document).height() - $(".header").height() - $(".footer").height() + "px";
    $("#leftcol").css("height", newHeight);
    $("#centercol").css("height", newHeight);
    $("#rightcol").css("height", newHeight);
}