import { $ } from './helpers';
import { $} from './login.'

export default function (store) {
  $('#cart-icon, #close').on('click', () => {
    store.trigger('TOGGLE_SHOW_CART');
  });

  $('.login').on('click', e => {
    let parent = e.srcElement.parentElement;
    let user = parent.children[2].value;
    let password = parent.children[3].value;
    console.log(e);
    if (user == 'admin' && password == 'proyectos') {
      store.trigger('CREDENTIALS_CORRECT', store);
    } else {
      store.trigger('CREDENTIALS_REJECTED', store);
    }
  });

}
