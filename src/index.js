module.exports = function reverse (n) {
  const string = Math.abs(n).toString().split('').reverse().join('');
  return Number(string);
}
