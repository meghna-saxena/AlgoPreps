function findLongestString(items) {
  const lengthOfItems = items.map(i => i.length);

  const biggestNumber = Math.max(...lengthOfItems); //20

  return items.find(i => i.length === biggestNumber);
}

function findLongestStringOptimized(items) {
  let longest = items[0];
  items.forEach(i => {
    longest = longest.length >= i.length ? longest : i;
  });
  return longest;
}

export const findLongestStringByReduce = items => {
  const getLarger = (x, y) => (x.length >= y.length ? x : y);
  return items.reduce(getLarger);
};

const findLongestStringByReduce2 = xs =>
  xs.reduce((x, y) => (x.length >= y.length ? x : y));

const data = ["short", "first long string!!", "medium", "abcdefghijklmnopqrs"];

console.log(findLongestString(data));
console.log(findLongestStringOptimized(data));
console.log(findLongestStringByReduce(data));
console.log(findLongestStringByReduce2(data));
