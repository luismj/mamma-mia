$(document).ready(function(){
  
  $('.addDish').click(function(){
    var itemData = {name:"Dish name example", description:"Dish description example", price:5 }
    var item = createMenuItem(itemData);
    event.target.parentNode.insertBefore(item, event.target);
  });

})
