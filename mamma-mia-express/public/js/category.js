function createCategory(headline, menuItems = []){
    const title = addClass(h1(text(headline)), 'title');
    const addDishButton = addClass(button(text('Add dish')), 'add-dish', 'button', 'is-fullwidth');

    const item = addClass(div(title, ...menuItems, addDishButton), "collection");
    return item;
}