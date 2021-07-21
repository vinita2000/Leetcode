var singleNumber = function(nums) {
    
    if (nums.length == 1) return nums[0];
    
    nums.sort();
    
    let i = 0;
    while (i<nums.length-1){
        if (nums[i] === nums[i+1]) i += 2;
        else return nums[i];
    }
    console.log(nums, i);
    if (i === nums.length-1) return nums[i];
};
