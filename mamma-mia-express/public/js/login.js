import { $ } from './helpers';

function login() {
 
    $('#cart-icon, #close').on('click', () => {
        store.trigger('TOGGLE_SHOW_CART');
      });


    console.log("HOLA MUNDO")

  store.on('TOGGLE_SHOW_CART', ({ cartVisible }) => {
    const ele = $('#modal');
    if (cartVisible) {
      ele.addClass('show');
    } else {
      ele.removeClass('show');
    }
  });

}
