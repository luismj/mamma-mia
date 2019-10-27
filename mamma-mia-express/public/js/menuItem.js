function createMenuItem(itemData){
    const name = addClass(h3(text(itemData.name)), 'name');
    const price = addClass(span(text(`$${formatPrice(itemData.price)}`)), 'price', 'is-pulled-right');
    const description = addClass(p(text(itemData.description)), 'desc');
    const mediaContent = addClass(div(name, price, description), 'media-content');
    const item = addClass(article(mediaContent), 'media', 'menu_item');
    item.dataset.key = itemData.id;
    return item;
}