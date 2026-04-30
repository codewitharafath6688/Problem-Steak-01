const sentence = "I love programming and solving problems";

const converArray = sentence.split(" ").reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + curr.length;
  return acc;
}, {});

const maxLengthWord = Object.keys(converArray).reduce((a, b) =>
  converArray[a] > converArray[b] ? a : b,
);

console.log(converArray, maxLengthWord);
