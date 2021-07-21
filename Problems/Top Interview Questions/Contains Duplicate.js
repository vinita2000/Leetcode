var containsDuplicate = function(nums) {
    nums.sort();
    let flag = false;
    for (let i=0; i<nums.length-1; i++){
        if (nums[i] == nums[i+1]) {
            flag = true;
            break;
        }
    }
    return flag;
};
