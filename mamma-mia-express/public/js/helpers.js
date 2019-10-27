function formatPrice(price) {
  return parseFloat(price).toFixed(2);
}

function filterByType(map, type) {
  return Object.keys(map)
    .filter(key => map[key].type === type)
    .map(key => map[key]);
}
