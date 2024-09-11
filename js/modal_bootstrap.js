document.addEventListener('DOMContentLoaded', function() {
  const btn_open_application = document.querySelectorAll('.js-btn-modal-application');
  const btn_close_application = document.querySelectorAll('.js-btn-close-application')
  const elemModal_application = document.querySelector('#js-modal_application');
  let modal_application;
  if(elemModal_application){
  modal_application = new bootstrap.Modal(elemModal_application);
  btn_open_application.forEach(btn => btn.addEventListener('click', function() {
    modal_application.show(500); 
  }))
  btn_close_application.forEach(btn => btn.addEventListener('click', function() {
    modal_application.hide() }))
  }
  
  
  
  const btn_open_tarif = document.querySelectorAll('.js-btn-info-tarif');
 
  const elemModal_tarif = document.querySelector('#js-modal-tarif');
  let modal_tarif
  if(elemModal_tarif){
  modal_tarif = new bootstrap.Modal(elemModal_tarif);
  btn_open_tarif.forEach(btn => btn.addEventListener('click', function() {
    modal_tarif.show(); 
  }))
  
  
  }




  const btn_open_product = document.querySelectorAll('.js-btn-modal-product');
 
  const elemModal_product = document.querySelector('#js-modal-product');
  let modal_product;
  if(elemModal_product){
  modal_product = new bootstrap.Modal(elemModal_product);
  btn_open_product.forEach(btn => btn.addEventListener('click', function() {
    modal_product.show(); 
  }))
  
  
  
}
   
  const btn_open_notification = document.querySelectorAll('.js-btn-modal-notification');
  const btn_close_notifaction = document.querySelectorAll('.js-btn-close-notification');
  const elemModal_notification = document.querySelector('#modal-notification');
  let modal_notification;
  if(elemModal_notification){
    modal_notification = new bootstrap.Modal(elemModal_notification);
    btn_open_notification.forEach(btn => btn.addEventListener('click', function() {
      modal_notification.show(); 
    }))
    btn_close_notifaction.forEach(btn => btn.addEventListener('click', function() {
      modal_notification.hide() }))

  }

  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;
    
  function serializeForm(formNode, formModal) {
    const { elements } = formNode
    const data = Array.from(elements)
      .filter((item) => !!item.name)
      .map((element) => {
        const { name, value } = element
  
        return { name, value }
      })
    data.forEach((el) =>{
      if(el.name == "phone"){
        if(el.value.match(phoneno)){
         
          if(formModal != undefined){
              formModal.hide()
          }
          modal_notification.show();
        }
        else {
          alert("Не корректно введенный номер")
        }
      }
    })
    
  }
  
 
 
  const form_modal_app = document.querySelectorAll('.form-modal-app');
  const form_tarif = document.querySelectorAll('.form-tarif');
  const form_product = document.querySelectorAll('.form-product');
  const form_offer = document.querySelectorAll('.form-offer');
  const form_message = document.querySelectorAll('.form-message');
  const form_app = document.querySelectorAll('.form-app');
  if(form_modal_app) {
    form_modal_app.forEach(form => form.addEventListener('submit',(event) =>{
      event.preventDefault();
      serializeForm(form, modal_application)
    }))
  }
  if(form_tarif) {
    form_tarif.forEach(form => form.addEventListener('submit',(event) =>{
      event.preventDefault();
      serializeForm(form, modal_tarif)
    }))
  }
  if(form_product) {
    form_product.forEach(form => form.addEventListener('submit',(event) =>{
      event.preventDefault();
      serializeForm(form, modal_product)
    }))
  }
  if(form_offer) {
    form_offer.forEach(form => form.addEventListener('submit',(event) =>{
      event.preventDefault();
      serializeForm(form)
    }))
  }
  if(form_message) {
    form_message.forEach(form => form.addEventListener('submit',(event) =>{
      event.preventDefault();
      serializeForm(form)
    }))
  }
  if(form_app) {
    form_app.forEach(form => form.addEventListener('submit',(event) =>{
      event.preventDefault();
      serializeForm(form)
    }))
  }
})
 
 
 




