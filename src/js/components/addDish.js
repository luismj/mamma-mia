import { addClass, article, button, div, h1, h3, p, span, text, section, addId } from '../builders';
import { formatPrice } from '../helpers';

export default function addDish() {
 
  //document.getElementById("addDish").innerHTML = "Hello World";
  //TODO - Category debe ser un select
  const category = addClass(h1(text('Category')), 'category');
  const name = addClass(h3(text('Name')), 'name');
  const description = addClass(p(text('Description')), 'description');

  const newDishContent = addClass(div(category, name, description), 'new-dish-content');

  const addDishEle = addId(addClass(section(newDishContent), 'addDish'), 'addDish');
  console.log("ADD DISH ELEMENT EN ADDDISHJS", addDishEle);

  return addDishEle;
}
