import { addClass, addId, input, password, button, div, h1, h3, i, section, text, ul } from '../builders';
import { $ } from '../helpers';
import modalItem from './modalItem';

export default function modal(store) {
  const close = addId(addClass(i(), 'fa', 'fa-times', 'close'), 'close');
  const title = addClass(h1(text('Ingreso')), 'title');

  const userField = addClass(input("Usuario"), 'user', 'menu-item', 'is-fullwidth');
  const passwordField = addClass(password(), 'password', 'menu-item', 'is-fullwidth');

  const messageBoard = addClass(div(), 'message-board');

  const loginButton = addClass(button(text('Ingresar')), 'login', 'button', 'is-fullwidth');

  const modalContainer = addClass(div(close, title, userField, passwordField, messageBoard, loginButton), 'modal-container');

  const modalEle = addId(addClass(section(modalContainer), 'modal'), 'modal');

  console.log("HOLAAA");
  console.log("Modal Ele en modaljs", modalEle);

  store.on('TOGGLE_SHOW_CART', ({ cartVisible }) => {
    const ele = $('#modal');
    if (cartVisible) {
      ele.addClass('show');
    } else {
      ele.removeClass('show');
    }
  });

  store.on('ITEM_ADDED', ({ items, cart }) => {
    const cartArray = [...cart];
    const cartItems = cartArray.map(itemId => modalItem(items[itemId]));
    const cartList = addClass(ul(...cartItems), 'menu');
    $('#cart-items').children(cartList);
  });

  store.on('CREDENTIALS_CORRECT', (store) => {
    console.log('credentials correct');
    if (store.incorrectMsgShowing) {
      $('.message-board').removeChildWithId('incorrect-password');
    }
    store.incorrectMsgShowing = false;
    const ele = $('#modal');
    ele.removeClass('show')

    //TODO: Add a navbar for the administrator mode so that editable content is enabled after clicking an Edit button
    //Navbar should have an Edit button and once in editing mode, a Cancel and a Save button
    //Cancel will undo the action and Save will trigger the persistance
    const removeItems = $('.remove');
    const editItems = $('.edit');
    const cancelEdit = $('.cancel-edit');
    const applyEdit = $('.apply-edit');

    removeItems.removeClass('hidden');
    editItems.removeClass('hidden');

    editItems.on('click', e => { 
      const menuElement = e.target.parentElement
      const idElement = '#' + menuElement.id + ' .';

      $(idElement + 'remove').addClass('hidden');  
      $(idElement + 'edit').addClass('hidden');  
      $(idElement + 'cancel-edit').removeClass('hidden');
      $(idElement + 'apply-edit').removeClass('hidden');
      
      menuElement.childNodes.forEach((node) => toggleEditable(node));
    });

    applyEdit.on('click', e => { 
      exitEdit();
      const menuElement = e.target.parentElement;
      menuElement.childNodes.forEach((node) => toggleEditable(node));
    });

    cancelEdit.on('click', e => {
      exitEdit();

      //TODO: We need some logic here that either reverts the changes in edition

      const menuElement = e.target.parentElement;
      menuElement.childNodes.forEach((node) => toggleEditable(node));
    })

    function exitEdit(){
      removeItems.removeClass('hidden');  
      editItems.removeClass('hidden');  
      cancelEdit.addClass('hidden');
      applyEdit.addClass('hidden');
    }

    function toggleEditable(node){
      if(node.tagName != 'I'){
        if(node.classList.contains('editable')){
          node.classList.remove('editable');
          node.contentEditable = "false";
        } else {
          node.classList.add('editable');
          node.contentEditable = "true";
        }
      }
    }
  });

  store.on('CREDENTIALS_REJECTED', (store) => {
    if (!store.incorrectMsgShowing) {
      const msg = "Credenciales incorrectas. Inténtelo de nuevo o contacte al administrador.";
      const help = addId(addClass(h3(text(msg)), 'errorPanel'), 'incorrect-password');
      $('.message-board').addChildLast(help);
      store.incorrectMsgShowing = true;
    }
  });

  return modalEle;
}
