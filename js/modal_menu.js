$(document).ready(function(){ 
if($(".js-trigger_menu-modal").length){
    $(".js-trigger_menu-modal").hover(function(){
    $(".js-menu-modal").show(300)
    $(".js-blur").css({
        'filter' : 'blur(10px)'
    })
   })
}
if($(".js-menu-modal").length){
    $(".js-menu-modal").mouseleave(function(){
        $(".js-menu-modal").hide(300)
        $(".js-blur").css({
            'filter' : 'none'
        }) 
    })
}

})

