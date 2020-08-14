export default function cache(func) {
  const store = {};
  return (...args) => {
    const cacheKey = args.map(JSON.stringify).join();
    // @see [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)
    if (Object.prototype.hasOwnProperty.call(store, cacheKey)) {
      return store[cacheKey];
    }
    store[cacheKey] = func(...args);
    return store[cacheKey];
  };
}
