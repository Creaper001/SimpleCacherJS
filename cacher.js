module.export = function Cacher(callback) {
  const $ = {};

  function cache(args, i = 0, data = $) {
    if (i === args.length - 1) return data[args[i]] ?? null;
    if (args[i] in data) return cache(args, i + 1, data[args[i]]);

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

  function run(args) {
    const result = callback(...args);
    Object.assign($, prepare(args, result));
    return result;
  }

  return (...args) => cache(args) ?? run(args);
};
