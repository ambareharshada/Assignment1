var nums = [1, 1, 2, 2, 3];
var k = 1;

function removeDuplicatesFromArray(nums) {
  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[k] = nums[i + 1];
      k++;
    }
  }
  return k;
}

var output = removeDuplicatesFromArray(nums);
console.log(output);
