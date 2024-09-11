$(document).ready(function(){ 
    const SHOW_INITIAL = 9;
    const SHOW_MORE = 3;
    const $button = $('.js-btn-search-more');
    const $items_tarif = $('.js-pagination').hide();
    
    if($button.length){
      showItems(SHOW_INITIAL);
      $button.click(() => showItems(SHOW_MORE));
    }

    function showItems(count) {
        const $hidden = $items_tarif.filter(':hidden');
        $hidden.slice(0, count).show();
        $button.toggle($hidden.length > count);
      }

    

})