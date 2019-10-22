$(document).ready(function () {
    $( ".hamburger-header" ).click(function() {
        let modalMenu = $(".modal-menu");
        console.log(modalMenu);
        modalMenu.toggleClass( "flex" );
        if (modalMenu.hasClass("flex")) {
            $(".logo-wrapper").css("z-index", "0");
        } else {
            $(".logo-wrapper").css("z-index", "10");
        }
    });
});
