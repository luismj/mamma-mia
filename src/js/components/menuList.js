import { addClass, button, div, h1, text } from '../builders';
import menuItem from './menuItem';

export default function menuList(headline, items = []) {
  const menuItems = items.map(menuItem);

  const title = addClass(h1(text(headline)), 'title');
  const addDishButton = addClass(button(text('Add Dish')), 'addDish', 'button', 'is-fullwidth');

  return addClass(div(title, ...menuItems, addDishButton), 'collection');
}
