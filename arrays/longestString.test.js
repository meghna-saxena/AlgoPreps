import { findLongestStringByReduce } from "./longestString";

test("findLongestStringByReduce function to exist", () => {
  expect(findLongestStringByReduce).toBeDefined();
});

test("findLongestStringByReduce returns longest string", () => {
  const items = ["abc", "def", "helloraj", "a"];
  const expected = "helloraj";

  expect(findLongestStringByReduce(items)).toBe(expected);
});
