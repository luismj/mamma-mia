function addDish() {
 
  const category = addClass(h1(text('Category')), 'category');
  const name = addClass(h3(text('Name')), 'name');
  const description = addClass(p(text('Description')), 'description');
  const newDishContent = addClass(div(category, name, description), 'new-dish-content');
  const addDishEle = addId(addClass(section(newDishContent), 'add-dish'), 'add-dish');

  return addDishEle;
}
