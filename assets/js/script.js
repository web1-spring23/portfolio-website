console.log("hello world!");

$('#menu-button').click(function(){
    $("#overlay-menu-container").fadeIn();
    $("body").addClass("no-scroll");
});

$('#close-menu').click(function(){
    $('#overlay-menu-container').fadeOut();
    $("body").removeClass("no-scroll");
});