$(document).ready(function(){ 
    if($(".js-img-hidden").length) {
    $(".js-img-hidden").click(function(){
        var src = $(this).attr('src');
        var newsrc = (src=='img/arrow-down.svg') ? 'img/arrow-up.svg' : 'img/arrow-down.svg';
        $(this).attr('src', newsrc );
         var $hidden = $(this).parents(".vacancie-block").find(".js-block-hidden");
        $hidden.toggle();
        });
    }
 })