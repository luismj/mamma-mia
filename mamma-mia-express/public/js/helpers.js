function formatPrice(price) {
  return parseFloat(price).toFixed(2);
}

function filterByType(map, type) {
  return Object.keys(map)
    .filter(key => map[key].type === type)
    .map(key => map[key]);
}

function groupBy(xs, key) {
  return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
  }, {});
}