


$(document).ready(function(){

    // Show-more button

    $('.show-more').click(function() {
        $('.more-block').slideToggle( "slow" );
        if ($(this).text() === "Приховати") {
            $(this).text("Всі знижки")
        } else {
            $(this).text("Приховати")
        }
    });

// Dropdown

    $('.dropdown-btn').click(function() {
        $('.dropdown-content').slideToggle();

    });

// Mob-menu

    $('#nav-icon1').click(function() {
        $(this).toggleClass('open');
        $('.nav-top-mob').slideToggle();
    });

});
