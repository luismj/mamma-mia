function addDish(){
  var itemData = {name:"Dish name example", description:"Dish description example", price:5 }
  var item = createMenuItem(itemData);
  event.target.parentNode.insertBefore(item, event.target);

  $('.remove-dish').click(removeDish);
  $('.edit-dish').click(editDish);
}