import { div, addId, addClass, text, button } from '../builders';
import modal from './modal';
import navbar from './navbar';
import hero from './hero';
import menu from './menu';
import bottom from './bottom';

export default function app(store) {
  const modalEle = modal(store);
  const navbarEle = navbar();
  const heroEle = hero();
  const menuEle = menu(store);
  const bottomEle = bottom();
  const edit = addClass(button(text('Edit')), 'edit', 'button');
  const addCategoryButton = addClass(button(text('Add Category')), 'addCategory', 'button');
  const addDishButton = addClass(button(text('Add Dish')), 'addDish', 'button');
  const saveButton = addClass(button(text('Save')), 'saveButton', 'button');
  const appEle = addId(div(modalEle, navbarEle, heroEle, div(edit, addCategoryButton, addDishButton, saveButton), menuEle, bottomEle), 'app-container');

  return appEle;
}
