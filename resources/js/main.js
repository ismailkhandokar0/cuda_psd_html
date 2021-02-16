
$(document).ready(function(){

    // waypoint sticky menu  
    $('.js-service-section').waypoint(function(direct){
        if(direct == 'down'){
            $('nav').addClass('sticky')
        }else{
            $('nav').removeClass('sticky')
        }
    })

    // laptop a use kito plugin mixit
    let mixin = mixitup('.custom_plg_cod')
})