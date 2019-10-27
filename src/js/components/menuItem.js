import { addClass, article, button, div, h3, p, span, text, i } from '../builders';
import { formatPrice } from '../helpers';

export default function menuItem(itemData = {}) {
  const name = addClass(h3(text(itemData.name)), 'name');
  const remove = addClass(i(),'fa','fa-trash','hide','remove')
  const price = addClass(span(text(`$${formatPrice(itemData.price)}`)), 'price', 'is-pulled-right');
  const description = addClass(p(text(itemData.description)), 'desc');

  const mediaContent = addClass(div(name, price, description,remove), 'media-content');

  const item = addClass(article(mediaContent), 'media', 'menu_item');
  item.dataset.key = itemData.id;

  return item;
}
