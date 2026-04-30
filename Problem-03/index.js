const sales = [
  { category: "Electronics", product: "Phone", qty: 10 },
  { category: "Electronics", product: "Laptop", qty: 5 },
  { category: "Clothing", product: "Shirt", qty: 20 },
  { category: "Electronics", product: "Phone", qty: 15 },
  { category: "Clothing", product: "Shirt", qty: 10 },
];

const groupedCategory = sales.reduce((acc, curr) => {
  acc[curr.category] = (acc[curr.category] || 0) + curr.qty;
  return acc;
}, {});

const maxQuantityCategory = Object.keys(groupedCategory).reduce((a, b) => groupedCategory[a] > groupedCategory[b] ? a : b)

console.log(groupedCategory, `& Max quantity number of category is ${maxQuantityCategory}`);
