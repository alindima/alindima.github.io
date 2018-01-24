var $more = $('.button a'),
    $more_id=$('#whoAmI');

$more.on('click', function(e){
    e.preventDefault();

    $('html,body').animate({
        scrollTop: $more_id.offset().top+5
    },1000);
});
