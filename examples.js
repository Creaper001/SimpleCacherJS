const Cacher = require('./cacher');

function sum(n1, n2) {
  console.log('run the sum function');
  return n1 + n2;
}

const sumCacher = Cacher(sum);
console.log(sumCacher(1, 4));
console.log(sumCacher(3, 1));
console.log(sumCacher(1, 4));

function rand(n1) {
  console.log('run the random function');
  return n1 * 50;
}

const randCacher = Cacher(rand);
console.log(randCacher(1));
console.log(randCacher(3));
console.log(randCacher(1));
