module.exports = function run(fn) {
  return (...args) =>
    new Promise(resolve => {
      fn(...args, (err, res) => resolve([err, res]));
    });
};
