function longestString(array) {
  const newarr = [];
  array.map(el => {
    newarr.push(el.length);
  });

  const largeBet = Math.max(...newarr);

  function isLargeNumber(element) {
    return element.length === largeBet;
  }

  const largestIndex = array.findIndex(isLargeNumber);

  return array[largestIndex];
}

console.log(
  longestString([
    "short",
    "first long string!!",
    "medium",
    "abcdefghijklmnopqrs"
  ])
);

//  "first long string!!"