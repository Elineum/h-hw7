// 1 task  ///////////////////////////////////////////////////////

const UAH_PER_DOLLAR = 40;
const MAX_COUNT_DOLLARS = 100;

for (let i = 10; i <= MAX_COUNT_DOLLARS; i += 10) {
  console.log(`You need pay ${UAH_PER_DOLLAR * i} UAH per ${i} USD`);
}

// 2 task  ////////////////////////////////////////////////////////////////////

const SOME_NUMBER = 17;

if (SOME_NUMBER === 1) {
  console.log(`${SOME_NUMBER} in prime number`);
} else if (SOME_NUMBER > 1) {
  let isPrime = true;

  for (let i = 2; i < SOME_NUMBER; i++) {
    if (SOME_NUMBER % i === 0) {
      isPrime = false;
      break;
    }
  }

  console.log(`${SOME_NUMBER} is ${isPrime ? "prime" : "not prime"}`);
} else {
  console.log(`${SOME_NUMBER} is NEGATIVE or 0 number, so, its cant be prime.`);
}

// 3 task   //////////////////////////////////////////////////////////////////

const SOME_NUMBER_SECOND = 8;

let possibleToGet = false;

for (let i = 1, pow = 0; pow < SOME_NUMBER_SECOND; i++) {
  pow = 3 ** i;

  if (pow === SOME_NUMBER_SECOND) possibleToGet = true;
}

console.log(
  `${
    possibleToGet
      ? `Yes, you can obtain ${SOME_NUMBER_SECOND} by raising 3 to a certain power.`
      : `No, you cant obtain ${SOME_NUMBER_SECOND} by raising 3 to a certain power.`
  }`
);
