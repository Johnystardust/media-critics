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
     |  Slider Function
     |
     |  This is the function for te main slider
     |----------------------------------------------------------------
    */

    // Get some variables we can work with
    var ul = $('#slide-container');
    var slide_count = ul.children().length;

    var ul_width = (slide_count * 100) + "%";
    var slide_width = (100 / slide_count) + "%";

    var slide_index = 0;

    // Set the container width to slide * 100%
    ul.css('width', ul_width);

    // Set the slide width to 100% / slide count
    ul.find('li').each(function(i){
        var left_precent = (slide_width * i) + "%";

        $(this).css('left', left_precent);
        $(this).css('width', slide_width)
    });


    /*
     |----------------------------------------------------------------
     |  Timer Function
     |----------------------------------------------------------------
     */
    var timer;

    function slide_timer(){
        if(slide_index <= (slide_count - 2)){
            slide(slide_index + 1);
        }
        else {
            slide(0);
            slide_index = 0;
        }
    }
    timer = setInterval(slide_timer, 7000);

    /*
     |----------------------------------------------------------------
     |  Menu Functions
     |----------------------------------------------------------------
    */
    // Listener for the prev button
    $('.slide-left').click(function(){
        // Clear the timer
        clearInterval(timer);
        timer = setInterval(slide_timer, 7000);

        slide(slide_index - 1);
    });

    // Listener for the next button
    $('.slide-right').click(function(){
        // Clear the timer
        clearInterval(timer);
        timer = setInterval(slide_timer, 7000);

        slide(slide_index + 1);
    });

    /*
     |----------------------------------------------------------------
     |  Slide Functions
     |----------------------------------------------------------------
    */
    function slide(new_slide_index){
        // Show the prev button only when there is a prev slide
        if(new_slide_index < 1){
            $('.slide-left').addClass('animated bounceOutLeft');
        }
        else {
            $('.slide-left').addClass('bounceInLeft');
            $('.slide-left').removeClass('bounceOutLeft');
        }

        // Show the next button only when there is a next slide
        if(new_slide_index >= (slide_count - 1)){
            $('.slide-right').addClass('animated bounceOutRight');
        }
        else {
            $('.slide-right').addClass('bounceInRight');
            $('.slide-right').removeClass('bounceOutRight');
        }

        // Set the animate distance
        var animate_left = (new_slide_index * (-100)) + "%";

        // Apply the animate distance
        ul.css('margin-left', animate_left);

        // The slide_index is the new_slide_index
        slide_index = new_slide_index;
    }

});