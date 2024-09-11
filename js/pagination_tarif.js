$(document).ready(function(){ 
    const SHOW_INITIAL = 3;
    const SHOW_MORE = 3;
    const $button = $('.js-btn-search-more');
    const $items_tarif = $('.js-pagination').hide();
    const $items_tarif_tab = $('.js-pagination-tab').hide();
    
    if($button.length){
      showItems(SHOW_INITIAL);
      $button.click(() => showItems(SHOW_MORE));
    }
   
       function showItems(count) {
        const $hidden = $items_tarif.filter(':hidden');
        const $hidden_tab = $items_tarif_tab.filter(':hidden');
        $hidden_tab.slice(0, count).show();
        $button.toggle($hidden_tab.length > count);
        $hidden.slice(0, count).show();
        $button.toggle($hidden.length > count);
        
      }

    

})