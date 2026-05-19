var productExceptSelf = function (nums) {
  let left = [];
  let right = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      left[i] = 1;
    } else {
      left[i] = left[i - 1] * nums[i - 1];
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      right[i] = 1;
    } else {
      right[i] = right[i + 1] * nums[i + 1];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
