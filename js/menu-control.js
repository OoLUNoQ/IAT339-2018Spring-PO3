$('#mobile-menu-button').on('click', function () {
    if($('.menu-mobile').is(':visible')){
        $('.menu-mobile').hide();
    }
    else{
        $('.menu-mobile').show();
    }
})