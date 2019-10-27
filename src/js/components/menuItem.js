import { addClass, addId, article, button, div, h3, p, span, text, i } from '../builders';
import { formatPrice } from '../helpers';

export default function menuItem(itemData = {}) {
  const name = addClass(h3(text(itemData.name)), 'name');
  const remove = addClass(i(),'fa','fa-trash','hidden','remove')
  const edit = addClass(i(),'fa','fa-edit','hidden','edit');
  const accept = addClass(i(),'fa','fa-check','hidden','apply-edit');
  const cancel = addClass(i(),'fa','fa-times','hidden','cancel-edit');
  const price = addClass(span(text(`$${formatPrice(itemData.price)}`)), 'price', 'is-pulled-right');
  const description = addClass(p(text(itemData.description)), 'desc');
  //const addDishButton = addClass(button(text('Add Dish')), 'addDish', 'button', 'is-fullwidth');

  const uuid = Math.random().toString(36).substr(2, 9);
  const itemId = "item_"+ uuid;
  const mediaContent = addId(addClass(div(name, price, description,remove,edit,accept,cancel), 'media-content'),itemId);

  const item = addClass(article(mediaContent), 'media', 'menu_item');
  item.dataset.key = itemData.id;

  return item;
}
