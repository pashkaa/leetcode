var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  let dataSet = new Set(nums);
  let maxLength = 0;

  for (let num of dataSet) {
    if (!dataSet.has(num - 1)) {
      let currentNum = num;
      let currentMax = 1;

      while (dataSet.has(currentNum + 1)) {
        currentNum += 1;
        currentMax += 1;
      }

      maxLength = Math.max(maxLength, currentMax);
    }
  }

  return maxLength;
};

console.log(longestConsecutive([2, 20, 4, 10, 3, 4, 5])); // 4
console.log(longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1])); // 7
