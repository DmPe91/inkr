$(window).on("resize", function () {
    var w = $(window).width();
    if (w <= 480) {
        // Если ширина окна меньше, либо равна 600
        if($(".js-mobile-screen").length && $(".js-mobile-after").length){
        $(".js-mobile-screen").insertAfter(".js-mobile-after"); 
        }
        if($(".js-footer_element").length && $(".js-footer_before").length) {
        $(".js-footer_element").insertAfter(".js-footer_before");
        }
        } else {
        if($(".js-mobile-screen").length && $(".js-mobile-before").length) {  
        $(".js-mobile-screen").insertAfter(".js-mobile-before"); 
        }
        if($(".js-footer_element").length && $(".js-footer_after").length){
        $(".js-footer_element").insertAfter(".js-footer_after");
        }
        }

 } );