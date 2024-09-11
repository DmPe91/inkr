$(document).ready(function(){
    if($(".js-btn-slider").length){
    $(".js-btn-slider").click(function(){
      $(".js-btn-slider").removeClass("active-slider-btn").eq($(this).index()).addClass("active-slider-btn");
      var value = $(this).attr("data-filter");
      var elem = $(".js-elem");
      
      
        $(elem).not("."+value).hide();
        $(elem).filter("."+value).show().css("display", "flex");
      
    }); 
}
  })