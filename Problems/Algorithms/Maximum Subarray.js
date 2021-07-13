/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    if (nums.length === 1)  return nums[0];
    
    let currSum = 0; let maxSum = nums[0];
    
    for (let i=0; i<nums.length; i++){
        currSum += nums[i];
        if (currSum > maxSum) maxSum = currSum;
        if (currSum < 0) currSum = 0;
    }
    
    return maxSum;
    
};
