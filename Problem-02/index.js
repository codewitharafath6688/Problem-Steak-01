const orders = [
  { customer: "A", amount: 500 },
  { customer: "B", amount: 900 },
  { customer: "A", amount: 700 },
  { customer: "C", amount: 400 },
  { customer: "B", amount: 900 },
];

const totalAmount = orders.reduce((acc, curr) => {
  acc[curr.customer] = (acc[curr.customer] || 0) + curr.amount;
  return acc;
}, {});

const maxAmountCustomer = Object.keys(totalAmount).reduce((a, b) =>
  totalAmount[a] > totalAmount[b] ? a : b,
);

console.log(totalAmount, `& Max amount customer is ${maxAmountCustomer}`);
