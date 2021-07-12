/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let cnt = 0; let currNum = nums[0];
    
    for (let i=1; i<nums.length; i++){
      if (currNum === nums[i]) nums[i] = '-';
      else currNum = nums[i];
    }
    
    let i = 0;
    
    while (i < nums.length){
        if (nums[i] === '-') nums.splice(i, 1);
        else i += 1;
    }
    console.log(nums);
    return nums.length;
};
