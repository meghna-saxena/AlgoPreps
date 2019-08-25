const findFirstNonRepeatingCharacter = str => {
  const characters = str.split("");
  const characterCount = {};

  const isNotPresent = char => typeof char === "undefined";

  characters.forEach(char => {
    characterCount[char] = isNotPresent(characterCount[char])
      ? 1
      : characterCount[char] + 1;
  });

  //   console.log("characterCount", characterCount);
  const firstNonRepeatingCharacter = characters.find(
    a => characterCount[a] < 2
  );

  return firstNonRepeatingCharacter;
};

console.log(findFirstNonRepeatingCharacter("elephant"));
console.log(findFirstNonRepeatingCharacter("hello"));
console.log(findFirstNonRepeatingCharacter("aabbcddeg"));