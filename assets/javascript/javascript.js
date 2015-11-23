/**
 * Created by Tim on 11/18/2015.
 */

$(document).ready(function(){

    /*
     |----------------------------------------------------------------
     |   Show the work info
     |----------------------------------------------------------------
     */
    $('.work-block').click(function(){
        // Get the data number to know the number of block
        var number = $(this).attr('data-number');

        // Remove the previous active
        $('.work-block').removeClass('active');
        // And add the new one
        $(this).addClass('active');

        // Set the work image overlay to 0
        $(this).find('.work-overlay').css('top', '0%');

        if(number == 2){
            $(this).css('left', '-33.33333%');
        }
        if(number == 3){
            $(this).css('left', '-66.66666%');
        }

        // Set the work info left to 100%
        $(this).find('.work-info').css('left', '100%');

        return false;
    });

    /*
     |----------------------------------------------------------------
     |   Close the work-info
     |----------------------------------------------------------------
     */
    $('.close-button').click(function(){
        // Set the work info back to original
        $('.active').find('.work-info').css('left', '300%');

        // Set the work overlay back to original
        $('.active').find('.work-overlay').css('top', '100%');

        // Set the Image back to original position
        $('.active').css('left', 0);

        return false;
    });

    /*
     |----------------------------------------------------------------
     |   Hover Function
     |----------------------------------------------------------------
     */
    $('.strategy-point').hover(function(){
        $(this).find('.icon-wrapper').addClass('animated flip');
    }, function(){
        $(this).find('.icon-wrapper').removeClass('animated flip');
    });

    //$('.strategy-point').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //    $(this).find('.icon-wrapper').removeClass('animated flip');
    //});

    $('.service').hover(function(){
        $(this).find('.small-icon-wrapper').addClass('animated flip');
    }, function(){
        $(this).find('.small-icon-wrapper').removeClass('animated flip');
    });

    //$('.service').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //    $(this).find('.small-icon-wrapper').removeClass('animated flip');
    //});


    /*
     |----------------------------------------------------------------
     |   Go to top Function
     |----------------------------------------------------------------
    */
    $('.go-to-top').hide();

    // Scroll to top fadeIn/fadeOut
    $(window).scroll(function(){
        if ($(this).scrollTop() > 400) {
            $('.go-to-top').show();
            $('.go-to-top').addClass('animated bounceInDown');
            $('.go-to-top').removeClass('bounceOutDown');
        } else {
            $('.go-to-top').addClass('bounceOutDown');
            $('.go-to-top').removeClass('bounceInDown');
        }
    });

    // Scroll to top
    $('.go-to-top').click(function(){
        $("html, body").animate({ scrollTop: 0 },600);
        return false
    });

});