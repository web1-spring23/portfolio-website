console.log("hello world!");

$('#menu-button').click(function(){
    $("#overlay-menu-container").fadeIn();
});

$('#close-menu').click(function(){
    $('#overlay-menu-container').fadeOut()
});