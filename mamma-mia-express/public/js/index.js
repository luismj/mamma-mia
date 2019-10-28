import app from './components/init.js';
import { createStore } from './state.js';
import setupListeners from './setup_listeners.js';

function reducer(state, event, data) {
  switch (event) {
    case 'SET_ITEMS':
      return Object.assign({}, state, {
        items: data.items.reduce((total, item) =>
          Object.assign({}, total, { [item.id]: item })
          , {}),
      });
    case 'ITEM_ADDED':
      return Object.assign({}, state, {
        cart: (new Set(state.cart)).add(data.item),
      });
    case 'ITEM_REMOVED':
      const newCart = (new Set(state.cart));
      newCart.delete(data.item);
      return Object.assign({}, state, {
        cart: newCart,
      });
    case 'TOGGLE_SHOW_CART':
      return Object.assign({}, state, {
        cartVisible: !state.cartVisible,
      });
    case 'TOGGLE_SHOW_NEW_DISH':
      return Object.assign({}, state, 
        )
    default:
      return state;
  }
}

const store = createStore(reducer);

fetch('food.json')
  .then(res => res.json())
  .then(resBody => {
    const body = document.querySelector('body');
    body.insertBefore(app(store), body.childNodes[0]);
    store.trigger('SET_ITEMS', { items: resBody });
    setupListeners(store);
  });
