const arr = [1, 2, 3, 4, 2, 3, 5, 6, 3];

const counterNumber = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
},{})

const maxCounterNumber = Object.keys(counterNumber).filter( n => counterNumber[n] > 1 ).map(Number)

console.log(counterNumber, maxCounterNumber);