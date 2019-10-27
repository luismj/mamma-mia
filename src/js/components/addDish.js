import { addClass, article, button, div, h3, p, span, text, section } from '../builders';
import { formatPrice } from '../helpers';

export default function addDish(dishData = {}) {
 /*  const name = addClass(h3(text(itemData.name)), 'name');
  const price = addClass(span(text(`$${formatPrice(itemData.price)}`)), 'price', 'is-pulled-right');
  const description = addClass(p(text(itemData.description)), 'desc');
  const addDishButton = addClass(button(text('Add Dish')), 'addDish', 'button', 'is-fullwidth');

  const mediaContent = addClass(div(name, price, description), 'media-content');

  const item = addClass(article(mediaContent), 'media', 'menu_item');
  item.dataset.key = itemData.id; */
    
  const name = addClass(h3(text(itemData.name)), 'name');
  const price = addClass(span(text(`$${formatPrice(itemData.price)}`)), 'price', 'is-pulled-right');
  const description = addClass(p(text(itemData.description)), 'desc');
  const category = addClass(h3(text('Category'), 'name'));
  //const addDishButton = addClass(button(text('Add Dish')), 'addDish', 'button', 'is-fullwidth');

  const newDishContent = addClass(i(), 'new-dish-content');
/* 
  const item = addClass(article(mediaContent), 'media', 'menu_item');
  item.dataset.key = itemData.id; */


  return newDishContent;
}
