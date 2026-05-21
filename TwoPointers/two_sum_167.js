var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  let i = 0;

  while (numbers[left] + numbers[right] !== target && i < 10) {
    if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }
  i++;
  return [left + 1, right + 1];
};

console.log(twoSum([1, 2, 3, 4, 5, 6], 3)); // [1,2]
console.log(twoSum([1, 1, 1, 3, 3, 4, 4, 5, 6], 8)); // [4,8]
console.log(twoSum([2, 7, 11, 15], 18)); // [2, 3]
console.log(twoSum([2, 3, 4], 6)); // [1, 3]
console.log(twoSum([-1, 0], -1)); // [1, 2]

// 1,6 = 7 > 3 = right--
// 1,5 = 6 > 3 = right--
// 1,4 = 5 > 3 = right--
// 1,3 = 4 > 3 = right--
// 1,2 = 3 == 3 good

// 1,6 = 7 < 8 = left++
// 1,6 = 7 < 8 = left++
// 1,6 = 7 < 8 = left++
// 3,6 = 9 > 8 = right--
// 3,5 = 8 === 8 = good

// 2,15 = 17 < 18 = left++
// 7,15 = 22 > 18 = right++
// 7,11 = 18 == 18 good
