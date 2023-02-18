const Cacher = require('./cacher');

function sum(n1, n2) {
  console.log('run the sum function');
  return n1 + n2;
}

async function rand(n1) {
  await new Promise((r) => setTimeout(r, 5000));
  console.log('run the random function');
  return n1 * 50;
}

(async () => {
  const sumCacher = Cacher(sum);
  console.log(await sumCacher(1, 4));
  console.log(await sumCacher(3, 1));
  console.log(await sumCacher(1, 4));

  const randCacher = Cacher(rand);
  console.log(await randCacher(1));
  console.log(await randCacher(1));
  console.log(await randCacher(1));
  console.log(await randCacher(1));
  console.log(await randCacher(1));
})();
