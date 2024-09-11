$(document).ready(function(){ 
    if($(".js-mobile-menu__btn").length){
    $(".js-mobile-menu__btn").click(function(e){
        $(".js-menu-popup").toggle()
        if($(".header").height() < $(window).height()){
            $(".header").toggleClass("header-mobile__height");
        }
        if($(window).height() < 625){
            $(".header").removeClass("header-mobile__height");
        }
})
}
    if($(".js-dropdown").length) {
        $(".js-dropdown").click(function(){
        var src = $(this).find(".js-dropdown__img").attr('src');
        var newsrc = (src=='img/arrow-down.svg') ? 'img/arrow-up.svg' : 'img/arrow-down.svg';
        $(this).find(".js-dropdown__img").attr('src', newsrc );
         var $hidden = $(this).find(".dropdown");
         $hidden.toggle();
        });
} 
})