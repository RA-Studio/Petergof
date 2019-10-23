$(document).ready(function () {
    $( ".hamburger-header" ).click(function() {
        let modalMenu = $(".modal-menu");
        console.log(modalMenu);
        modalMenu.toggleClass( "flex" );
        $( ".modal-menu .hamburger" ).toggleClass( "is-active" );
        if (modalMenu.hasClass("flex") && $(window).width() < 500) {
            $(".logo-wrapper").css("z-index", "0");
        } else {
            $(".logo-wrapper").css("z-index", "10");
        }
    });
});
