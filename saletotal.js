const sales = [
  { item: "PS4 Pro", stock: 3, original: 399.99 },
  { item: "Xbox One X", stock: 1, original: 499.99, discount: 0.1 },
  { item: "Nintendo Switch", stock: 4, original: 299.99 },
  { item: "PS2 Console", stock: 1, original: 299.99, discount: 0.8 },
  { item: "Nintendo 64", stock: 2, original: 199.99, discount: 0.65 },
];

let calculateSalesTotals = () => {
  let total, salePrice;
  let obj = [{}];
  let discount;
  sales.forEach((value, index) => {
    discount =
      value.discount != null ? (discount = value.discount) : (discount = 0);
    salePrice = value.original - value.original * discount;
    value.salePrice = salePrice;
    total = salePrice * value.stock;
    value.total = total;
    obj[index] = value;
  });
  return obj;
};
console.log(calculateSalesTotals());
