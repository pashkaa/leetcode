var topKFrequent = function (nums, k) {
  let dataMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (dataMap.has(nums[i])) {
      let newValue = dataMap.get(nums[i]) + 1;
      dataMap.set(nums[i], newValue);
    } else {
      dataMap.set(nums[i], 1);
    }
  }

  let buckets = [];

  for (let i = 0; i <= nums.length; i++) {
    buckets[i] = [];
  }

  for (let [num, freq] of dataMap) {
    buckets[freq].push(num);
  }

  let result = [];

  for (let i = buckets.length - 1; i >= 0; i--) {
    if (buckets[i].length > 0) {
      for (let num of buckets[i]) {
        result.push(num);

        if (result.length === k) {
          return result;
        }
      }
    }
  }
};

console.log(topKFrequent([1, 2, 2, 2, 3, 3, 3], 2)); // [2,3]
console.log(topKFrequent([7, 7], 1)); // [7]
