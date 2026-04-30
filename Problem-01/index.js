const sentence = "js is fun js and js is powerful and js is everywhere";

const wordCounter = sentence.split(" ").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

const maxCountWord = Object.keys(wordCounter).reduce((a , b) => wordCounter[a] > wordCounter[b] ? a : b)

console.log(wordCounter, `& Max counter word is ${maxCountWord}`);
