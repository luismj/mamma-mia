function createMenuItem(itemData){
    const name = addClass(h3(text(itemData.name)), 'name');
    const price = addClass(span(text(`$${formatPrice(itemData.price)}`)), 'price', 'is-pulled-right');
    const description = addClass(p(text(itemData.description)), 'desc');
    const remove = addClass(i(),'fa','fa-trash','remove-dish')
    const edit = addClass(i(),'fa','fa-pencil-alt','edit-dish');
    const accept = addClass(i(),'fa','fa-check','hidden','apply-edit-dish');
    const cancel = addClass(i(),'fa','fa-times','hidden','cancel-edit-dish');
    const toolbar = addClass(div(remove, edit, accept, cancel),'toolbar');

    const uuid = Math.random().toString(36).substr(2, 9);
    const itemId = "item_"+ uuid;

    const mediaContent = addId(addClass(div(name, price, description,toolbar), 'media-content'),itemId);
    const item = addClass(article(mediaContent), 'media', 'menu_item');
    item.dataset.key = itemData.id;
    return item;
}