/**
 * Created by Tim on 11/18/2015.
 */

$(document).ready(function(){

    // Show the work-info
    $('.work-block').click(function(){
        $(this).addClass('active');

        $('.work-block').hide();

        $('.active').show();
        $('.active').find('.work-info').show();

        return false;
    });

    $('.close-button').click(function(){
        $('.active').find('.work-info').hide();
        $('.work-block').removeClass('active');
        $('.work-block').show();

        return false;
    });
});