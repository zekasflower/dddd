$(function () {

    // Tabs
    $('.settings article .tabs ul li').on('click', function () {

        $('.tabs-content > div').hide()

        $('.settings').hide()
  
        $($(this).data('content')).fadeIn()
  
    });

    // Go back to settings page
    $('.tabs-content').on('click', '.fa-chevron-left', function () {

        $('.tabs-content > div').hide()

        $('.settings').fadeIn()

    });

    // Privacy switch icon
    $('.tabs-content .content-profile .privacy-switch').on('click', 'svg', function () {

        $(this).toggleClass('fa-toggle-off fa-toggle-on text-muted text-success');

    });

})