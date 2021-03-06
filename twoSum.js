// function two return idexes of elemens whose sum equals target
// Time complexity - O(n)
// Space complexity - O(n)
// https://leetcode.com/problems/two-sum/

const twoSum = function(nums, target) {
  let map = {}

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]

    if (String(complement) in map)
      return [map[complement], i]
    
    map[nums[i]] = i
  }
}


console.log(twoSum([2,7,11,15], 9))
