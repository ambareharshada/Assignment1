var nums = [2, 7, 11, 15];
// console.log(nums);
var target = 9;

function twoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      var addition = nums[i] + nums[j];
      if (target === addition) {
        // console.log([i, j]);
        return [i, j];
      }
    }
  }
}
var output = twoSum(nums, target);
console.log(output);
