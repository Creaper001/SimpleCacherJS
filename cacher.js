module.exports = function Cacher(callback) {
  const $ = {};

  async function cache(args, i = 0, data = $) {
    if (i === args.length - 1) return data[args[i]] ?? null;
    if (args[i] in data) return await cache(args, i + 1, data[args[i]]);

    return null;
  }

  function prepare(args, result, i = 0) {
    if (i === args.length - 1)
      return {
        [args.pop()]: result,
      };

    return {
      [args[i]]: {
        ...($[args[i]] ?? {}),
        ...prepare(args, result, i + 1),
      },
    };
  }

  async function run(args) {
    const result = await callback(...args);
    Object.assign($, prepare(args, result));
    return result;
  }

  return async (...args) => (await cache(args)) ?? (await run(args));
};
